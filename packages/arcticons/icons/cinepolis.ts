import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsCinepolisIcon],svg[arcticons-cinepolis-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M42.208 11.444c-8.437-8.527-22.189-8.601-30.716-.165a21.7 21.7 0 0 0-5.964 10.899l11.43 2.725c.757-5.561 5.708-9.432 11.06-8.645a9.63 9.63 0 0 1 5.149 2.486z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M6.405 21.698c4.158-11.102 16.604-16.76 27.799-12.636a21.7 21.7 0 0 1 6.215 3.547m2.053 28.947c-8.437 8.527-22.188 8.601-30.716.165a21.7 21.7 0 0 1-5.964-10.899l11.418-2.725c.757 5.561 5.708 9.432 11.06 8.645a9.63 9.63 0 0 0 5.149-2.486z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m40.323 43.105l-7.516-5.955c-3.333 3.115-9.321 2.99-13.376-.28c-2.163-1.745-3.432-4.133-3.47-6.528l-9.22 2.317"></svg:path>`,
})
export class ArcticonsCinepolisIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
