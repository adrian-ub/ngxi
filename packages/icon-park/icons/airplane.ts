import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkAirplaneIcon],svg[icon-park-airplane-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M20.5 10.5372C20.5 6.5143 22.8333 4.50286 24 4C25.1667 4.50286 27.5 6.5143 27.5 10.5372V18.0801L43 31V35L27 27V36L32 44L24 41L16 44L21 36V27L5 35V31L20.5 18.0801V10.5372Z"></svg:path>`,
})
export class IconParkAirplaneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
