import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsPcExpressIcon],svg[arcticons-pc-express-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M31.616 10.558a1.126 1.126 0 0 0-1.357-.718c-1.045.261-10.628 8.113-4.963 14.769c4.476 5.26 14.211-6.688 14.211-6.688"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M20.471 22.362c.505 3.1 3.153 13.672 5.33 12.278s-2.986-9.871-6.061-11.703c-3.303-1.968-11.06-3.67-11.245-5.428c-.198-1.874 15.495-9.306 18.211-3.75s-6.513 11.46-6.513 11.46"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.209 4.5h21.582v39H13.209z"></svg:path>`,
})
export class ArcticonsPcExpressIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
