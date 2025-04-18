import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkInfusionIcon],svg[icon-park-infusion-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M38 30C38 37.732 31.732 44 24 44C16.268 44 10 37.732 10 30C10 22.268 24 4 24 4C24 4 38 22.268 38 30Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M18 30H30"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M24 24V36"></svg:path></svg:g>`,
})
export class IconParkInfusionIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
