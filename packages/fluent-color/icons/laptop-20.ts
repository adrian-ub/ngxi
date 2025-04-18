import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorLaptop20Icon],svg[fluent-color-laptop-20-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorLaptop200)" d="m4.5 14l5-.5l6 .5h.264c.155 0 .308.036.447.106l1.342.67A.81.81 0 0 1 18 15.5H2a.81.81 0 0 1 .447-.724l1.342-.67A1 1 0 0 1 4.236 14z"></svg:path><svg:path fill="url(#fluentColorLaptop201)" d="M2.5 15a.5.5 0 0 0 0 1h15a.5.5 0 0 0 0-1z"></svg:path><svg:path fill="url(#fluentColorLaptop202)" d="M4.5 5A1.5 1.5 0 0 0 3 6.5v6A1.5 1.5 0 0 0 4.5 14h11a1.5 1.5 0 0 0 1.5-1.5v-6A1.5 1.5 0 0 0 15.5 5z"></svg:path><svg:defs><svg:lineargradient id="fluentColorLaptop200" x1="18" x2="17.197" y1="15.976" y2="11.158" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#63686E"></svg:stop><svg:stop offset="1" stop-color="#889096"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorLaptop201" x1="18" x2="17.884" y1="15.929" y2="14.079" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#889096"></svg:stop><svg:stop offset="1" stop-color="#AAB3BD"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorLaptop202" x1="12.8" x2="13.282" y1="5" y2="15.299" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#6CE0FF"></svg:stop><svg:stop offset="1" stop-color="#4894FE"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class FluentColorLaptop20Icon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
