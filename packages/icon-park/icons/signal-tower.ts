import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSignalTowerIcon],svg[icon-park-signal-tower-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" d="M17.0812 6.00005C10.9612 10.2853 9.47386 18.7205 13.7591 24.8405C18.0444 30.9605 26.4796 32.4479 32.5996 28.1626L17.0812 6.00005Z"></svg:path><svg:path d="M22 31V42"></svg:path><svg:path d="M13 24.5L6 42H42"></svg:path><svg:path d="M40 6L25 17"></svg:path><svg:path d="M17 6H40L33 27.5"></svg:path></svg:g>`,
})
export class IconParkSignalTowerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
