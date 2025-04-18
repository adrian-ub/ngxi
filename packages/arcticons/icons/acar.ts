import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsAcarIcon],svg[arcticons-acar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4.5 33.75c0-10.77 8.73-19.5 19.5-19.5s19.5 8.73 19.5 19.5z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m33.935 23.32l-8.269 2.298a3.16 3.16 0 0 0-3.09-.147a3.174 3.174 0 0 0 2.848 5.674a3.16 3.16 0 0 0 1.73-2.567z"></svg:path>`,
})
export class ArcticonsAcarIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
