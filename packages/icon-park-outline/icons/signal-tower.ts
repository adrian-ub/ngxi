import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineSignalTowerIcon],svg[icon-park-outline-signal-tower-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M17.081 6c-6.12 4.285-7.607 12.72-3.322 18.84s12.72 7.608 18.84 3.323zM22 31v11"></svg:path><svg:path d="M13 24.5L6 42h36M40 6L25 17M17 6h23l-7 21.5"></svg:path></svg:g>`,
})
export class IconParkOutlineSignalTowerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
