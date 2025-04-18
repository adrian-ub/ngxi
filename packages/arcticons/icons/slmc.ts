import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsSlmcIcon],svg[arcticons-slmc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M26.05 31.754h-9.804V16.067c.032-.666.855-1.64 1.675-1.622h6.31c.73-.003 1.757.747 1.792 1.497zm0-8.022h1.39c.709-.02.67.16.67.9l.089 4.858c.03 1.89 3.226 1.89 3.244 0l-.089-10.072l-3.636-3.636"></svg:path><svg:circle cx="29.704" cy="20.167" r="1.702" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M18.474 16.602v4.322h5.446v-4.358z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M3.5 24.089L13.928 6.173h20.233L44.5 24.09L34.16 41.826H13.84zM14.017 6.182l3.869 8.138m11.141 2.63l5.16-10.786"></svg:path>`,
})
export class ArcticonsSlmcIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
