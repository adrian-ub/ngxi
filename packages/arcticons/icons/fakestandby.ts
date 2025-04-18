import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsFakestandbyIcon],svg[arcticons-fakestandby-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M39.81 18.87L43 20.71c.66.39.67 1 0 1.39L19.47 35.69a2.67 2.67 0 0 1-2.4 0L5 28.72a.74.74 0 0 1 0-1.39l6.65-3.84m24.88-2.73l4.4 2.54M7.24 26.03l14.48 8.36"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7.24 20.95L26.46 9.86l14.47 8.36l-19.21 11.09z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M43.5 21.39v2.15a.84.84 0 0 1-.49.72L19.47 37.85a2.67 2.67 0 0 1-2.4 0L5 30.88a.85.85 0 0 1-.5-.67m0-2.17v2.17"></svg:path>`,
})
export class ArcticonsFakestandbyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
