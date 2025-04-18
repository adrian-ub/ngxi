import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsMedicoverIcon],svg[arcticons-medicover-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M17.26 14.53c10.737-4.425 19.863 1.408 23.786 9.221"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.147 20.518c6.457-6.663 15.724-7.2 23.415-1.4"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8.365 22.187c4.244-9.28 11.735-12.944 23.36-9.532M28.045 36.6c.576-7.487 8.232-9.74 15.455-11.474c-6.704.191-13.129-.062-19.5 4.888c-6.371-4.95-12.796-4.697-19.5-4.888c7.223 1.733 14.879 3.987 15.454 11.474z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M26.53 24.621a2.53 2.53 0 0 1-5.06 0h0a2.53 2.53 0 1 1 5.06 0"></svg:path>`,
})
export class ArcticonsMedicoverIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
