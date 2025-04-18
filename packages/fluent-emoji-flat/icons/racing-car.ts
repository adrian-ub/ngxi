import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiFlatRacingCarIcon],svg[fluent-emoji-flat-racing-car-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#F8312F" d="M30 26.477h-2V27l-3.852.686L5.42 28.1L2 27l4.42-2.21C8.78 23.61 11.37 23 14 23h2l1 1h3v-3a7.24 7.24 0 0 1 3.247.768c.393.197.548.59.901.857c.264.2.795.54 1.032.777L26 24v-4.023h4z"></svg:path><svg:path fill="#F4F4F4" d="M28 25H6l-2 1h24z"></svg:path><svg:path fill="#E6E6E6" d="M26 20h4v-1h-4z"></svg:path><svg:path fill="#CA0B4A" d="M26 27H2v2h24z"></svg:path><svg:path fill="#F9C23C" d="M30 22h-4v-1h4zm-12 7h2.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5H18z"></svg:path><svg:path fill="#636363" d="M19 24h1v-3c-.55 0-1 .45-1 1zm-2 2h1v3h-1z"></svg:path><svg:path fill="#E6E6E6" d="M23.24 21.764L21 24h5l-.88-.88a7.2 7.2 0 0 0-1.88-1.356"></svg:path><svg:path fill="#321B41" d="M12 26.5a3.5 3.5 0 1 1-7 0a3.5 3.5 0 0 1 7 0m18 0a3.5 3.5 0 1 1-7 0a3.5 3.5 0 0 1 7 0"></svg:path><svg:path fill="#F4F4F4" d="M10 26.5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0m18 0a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0"></svg:path></svg:g>`,
})
export class FluentEmojiFlatRacingCarIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
