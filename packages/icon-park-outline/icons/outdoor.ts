import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineOutdoorIcon],svg[icon-park-outline-outdoor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4" d="m4 42l14-32l10 24l4-12l12 20zm33-28a5 5 0 1 0 0-10a5 5 0 0 0 0 10Z"></svg:path>`,
})
export class IconParkOutlineOutdoorIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
