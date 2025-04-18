import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneMediumSkinToneIcon],svg[emojione-medium-skin-tone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="32" cy="32" r="30" fill="#d6a57c"></svg:circle>`,
})
export class EmojioneMediumSkinToneIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
