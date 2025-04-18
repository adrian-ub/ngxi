import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkLightningIcon],svg[icon-park-lightning-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#2F88FF" stroke="#000" stroke-linejoin="round" stroke-width="4" d="M19 4H37L26 18H41L17 44L22 25H8L19 4Z"></svg:path>`,
})
export class IconParkLightningIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
