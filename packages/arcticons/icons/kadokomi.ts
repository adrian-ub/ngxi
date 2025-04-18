import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsKadokomiIcon],svg[arcticons-kadokomi-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.236 5.875v16.444M5.125 9.986h16.444V22.32m4.112-.001V5.875m16.444 8.222H25.681"></svg:path><svg:circle cx="33.903" cy="5.875" r=".75" fill="currentColor"></svg:circle><svg:circle cx="42.125" cy="5.875" r=".75" fill="currentColor"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.125 26.431h16.444v16.444H5.125m37-10.963l-16.444 5.482m0-10.963h16.444M25.681 42.875h16.444"></svg:path>`,
})
export class ArcticonsKadokomiIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
