import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirHomeTemperatureOutIcon],svg[iconoir-home-temperature-out-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M14 8L4.311 3.156a.6.6 0 0 0-.6.037L2.5 4m9.5 7v8a2 2 0 0 1-2 2H7m0 0H3.6a.6.6 0 0 1-.6-.6v-4.8a.6.6 0 0 1 .6-.6h2.8a.6.6 0 0 1 .6.6zm12-3a2 2 0 1 0 0-4a2 2 0 0 0 0 4m0-10.5V14m0-2h2m-2-3h2"></svg:path>`,
})
export class IconoirHomeTemperatureOutIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
