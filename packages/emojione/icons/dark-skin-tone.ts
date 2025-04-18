import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneDarkSkinToneIcon],svg[emojione-dark-skin-tone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="32" cy="32" r="30" fill="#8a6859"></svg:circle>`,
})
export class EmojioneDarkSkinToneIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
