import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiFlatBulletTrainIcon],svg[fluent-emoji-flat-bullet-train-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#D3D3D3" d="M29.981 7h-10.13a9.43 9.43 0 0 0-6.892 3c0 1-1.054 2.442-1.459 3.5L7.737 16l-1.736 2l11.99 1l11.99-1z"></svg:path><svg:path fill="#E6E6E6" d="M29.99 18H6.002l-2.36 4.16C2.1 24.13 3.511 27 6.011 27H30v-9z"></svg:path><svg:path fill="#636363" d="m6 18l-3.358 4.15C1.1 24.123 2.512 27 5.018 27H6z"></svg:path><svg:path fill="#26C9FC" d="M7.737 16h14.048a5.89 5.89 0 0 0 4.736-2.4l1.243-1.68c.582-.79.02-1.92-.957-1.92H12.96q-.106.113-.208.23l-2.87 3.3z"></svg:path><svg:path fill="#46A4FB" d="M28 11H12.081l.67-.77q.102-.117.208-.23h13.89c.614 0 1.063.46 1.151 1M13 27l1.234-1.596C15.407 23.888 17.237 23 19.191 23H30v4z"></svg:path><svg:path fill="#FF6723" d="M10.991 22h-2c-.55 0-1-.45-1-1s.45-1 1-1h2c.55 0 1 .45 1 1s-.45 1-1 1"></svg:path><svg:path fill="#321B41" d="M30.001 27h-28v3h28z"></svg:path></svg:g>`,
})
export class FluentEmojiFlatBulletTrainIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
