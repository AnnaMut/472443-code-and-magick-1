'use strict';

(function () {
var userDialog = document.querySelector('.setup');


var WIZARDS_COUNT = 4;
var WIZARDS_NAMES = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон'
];

var WIZARDS_SURNAMES = [
  'да Марья',
  'Верон',
  'Мирабелла',
  'Вальц',
  'Онопко',
  'Топольницкая',
  'Нионго',
  'Ирвинг'
];

var COAT_COLORS = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'
];

var EYES_COLORS = [
  'black',
  'red',
  'blue',
  'yellow',
  'green'
];

var FIREBALL_COLORS = [
  '#ee4830',
  '#30a8ee',
  '#5ce6c0',
  '#e848d5',
  '#e6e848'
];

var getRandomElement = function (arr) {
  var randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
};

var Wizards = [];
for (var i = 0; i < WIZARDS_COUNT; i++) {

  Wizards[i] = {
    'name': getRandomElement(WIZARDS_NAMES) + ' ' + getRandomElement(WIZARDS_SURNAMES),

    'coatColor': getRandomElement(COAT_COLORS),

    'eyesColor': getRandomElement(EYES_COLORS)
  };
}

var similarListElement = userDialog.querySelector('.setup-similar-list');

var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
  return wizardElement;
};

var fragment = document.createDocumentFragment();
for (i = 0; i < Wizards.length; i++) {
  fragment.appendChild(renderWizard(Wizards[i]));
}
similarListElement.appendChild(fragment);

userDialog.querySelector('.setup-similar').classList.remove('hidden');



var userNameInput = userDialog.querySelector('.setup-user-name');

var getValidation = function () {
  if (userNameInput.validity.tooShort) {
    userNameInput.setCustomValidity('Имя должно состоять минимум из 2-х символов');
  } else if (userNameInput.validity.tooLong) {
    userNameInput.setCustomValidity('Имя не должно превышать 25-ти символов');
  } else if (userNameInput.validity.valueMissing) {
    userNameInput.setCustomValidity('Обязательное поле');
  } else {
    userNameInput.setCustomValidity('');
  }
};
userNameInput.addEventListener('invalid', getValidation);

var wizardCoat = document.querySelector('.wizard-coat');

var getCoatColor = function () {
  wizardCoat.setAttribute('style', 'fill: ' + getRandomElement(COAT_COLORS));
};
wizardCoat.addEventListener('click', getCoatColor);

var wizardEyes = document.querySelector('.wizard-eyes');

var getEyesColor = function () {
  wizardEyes.setAttribute('style', 'fill: ' + getRandomElement(EYES_COLORS));
};
wizardEyes.addEventListener('click', getEyesColor);

var wizardFireball = document.querySelector('.setup-fireball-wrap');

var getFireballColor = function () {
  wizardFireball.setAttribute('style', 'background: ' + getRandomElement(FIREBALL_COLORS));
};
wizardFireball.addEventListener('click', getFireballColor);

})();



(function () {
  var COLORS = ['red', 'green', 'blue'];

  var setup = document.querySelector('.setup');

  setup.classList.remove('hidden');

  var wizard = setup.querySelector('.wizard');

  var wizardCoat = wizard.querySelector('.wizard-coat');
  var fireball = setup.querySelector('.setup-fireball-wrap');

  wizardCoat.addEventListener('click', function () {
    wizardCoat.style.fill = COLORS[Math.floor(COLORS.length * Math.random())];
  });

  fireball.addEventListener('click', function () {
    fireball.style.backgroundColor = COLORS[Math.floor(COLORS.length * Math.random())];
  });

})();


(function () {
  var setup = document.querySelector('.setup');

  setup.classList.remove('hidden');

  var wizard = setup.querySelector('.wizard');

  var wizardCoat = wizard.querySelector('.wizard-coat');
  var fireball = setup.querySelector('.setup-fireball-wrap');

  window.colorize(wizardCoat);
  window.colorize(fireball);
  window.colorize(wizardEyes);

  var a;
})();
