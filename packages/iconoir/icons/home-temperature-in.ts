import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirHomeTemperatureInIcon],svg[iconoir-home-temperature-in-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="m2 8l9.732-4.866a.6.6 0 0 1 .536 0L22 8m-2 3v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8"></svg:path><svg:path d="M12 18a2 2 0 1 0 0-4a2 2 0 0 0 0 4m0-10.5V14m0-2h2m-2-3h2"></svg:path></svg:g>`,
})
export class IconoirHomeTemperatureInIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
