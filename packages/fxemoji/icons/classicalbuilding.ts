import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fxemojiClassicalbuildingIcon],svg[fxemoji-classicalbuilding-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#DADBDC" d="M29.888 131.912L252.423 20.926a7.45 7.45 0 0 1 6.647-.003l222.98 110.986c7.047 3.508 4.551 14.125-3.321 14.125H33.214c-7.869 0-10.368-10.61-3.326-14.122M482.8 154.269H29.2c-3.976 0-7.2 2.223-7.2 6.199v59.667a7.2 7.2 0 0 0 7.2 7.2h15.3v219.419c0 7.953 6.447 14.4 14.4 14.4h394.2c7.953 0 14.4-6.447 14.4-14.4V227.335h15.3a7.2 7.2 0 0 0 7.2-7.2v-59.667c0-3.977-3.224-6.199-7.2-6.199"></svg:path><svg:path fill="#999" d="M488.373 504.131H23.627c-10.413 0-16.857-11.347-11.521-20.29l18.225-30.545a13.42 13.42 0 0 1 11.521-6.542h428.296c4.724 0 9.1 2.485 11.521 6.542l18.225 30.545c5.335 8.942-1.108 20.29-11.521 20.29"></svg:path><svg:path fill="#C8CACB" d="m332.298 484.012l-153 .204l-.05-37.36l153-.204z"></svg:path><svg:path fill="#EBECED" d="M354.773 504.131h-198v-20.667a7.2 7.2 0 0 1 7.2-7.2h183.6a7.2 7.2 0 0 1 7.2 7.2z"></svg:path><svg:path fill="#767777" d="M127.875 446.754H82.496V205h45.379zM228.418 205h-45.379v241.754h45.379zm100.543 0h-45.379v241.754h45.379zm100.543 0h-45.379v241.754h45.379z"></svg:path><svg:path fill="#999" d="M496.3 170.423H15.7a7.2 7.2 0 0 1-7.2-7.2v-18.909a7.2 7.2 0 0 1 7.2-7.2h480.6a7.2 7.2 0 0 1 7.2 7.2v18.909a7.2 7.2 0 0 1-7.2 7.2m7.2 60.955v-19.909a7.2 7.2 0 0 0-7.2-7.2H15.7a7.2 7.2 0 0 0-7.2 7.2v19.909a7.2 7.2 0 0 0 7.2 7.2h480.6a7.2 7.2 0 0 0 7.2-7.2"></svg:path>`,
})
export class FxemojiClassicalbuildingIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
