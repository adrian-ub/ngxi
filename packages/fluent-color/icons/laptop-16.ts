import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorLaptop16Icon],svg[fluent-color-laptop-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorLaptop160)" d="m4.5 11l3.5-.5l3.5.5h.264c.155 0 .308.036.447.106l1.342.67A.81.81 0 0 1 14 12.5H2a.81.81 0 0 1 .447-.724l1.342-.67A1 1 0 0 1 4.236 11z"></svg:path><svg:path fill="url(#fluentColorLaptop161)" d="M2.5 12a.5.5 0 0 0 0 1h11a.5.5 0 0 0 0-1z"></svg:path><svg:path fill="url(#fluentColorLaptop162)" d="M3 5.5A1.5 1.5 0 0 1 4.5 4h7A1.5 1.5 0 0 1 13 5.5v4a1.5 1.5 0 0 1-1.5 1.5h-7A1.5 1.5 0 0 1 3 9.5z"></svg:path><svg:defs><svg:lineargradient id="fluentColorLaptop160" x1="14" x2="12.951" y1="12.976" y2="8.257" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#63686E"></svg:stop><svg:stop offset="1" stop-color="#889096"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorLaptop161" x1="14" x2="13.846" y1="12.929" y2="11.084" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#889096"></svg:stop><svg:stop offset="1" stop-color="#AAB3BD"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorLaptop162" x1="10" x2="10.408" y1="4" y2="12.007" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#6CE0FF"></svg:stop><svg:stop offset="1" stop-color="#4894FE"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class FluentColorLaptop16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
