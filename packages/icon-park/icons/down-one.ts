import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkDownOneIcon],svg[icon-park-down-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#2F88FF" stroke="#000" stroke-linejoin="round" stroke-width="4" d="M36 19L24 31L12 19H36Z"></svg:path>`,
})
export class IconParkDownOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
