import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkStretchingIcon],svg[icon-park-stretching-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M23.0005 5.99951H8.00049C6.89592 5.99951 6.00049 6.89494 6.00049 7.99951V39.9999C6.00049 41.1044 6.89592 41.9998 8.00049 41.9998H40.0005C41.1051 41.9998 42.0005 41.1044 42.0005 39.9998V24.9998"></svg:path><svg:path stroke-linecap="round" d="M24.001 15.9998V23.9998"></svg:path><svg:path stroke-linecap="round" d="M42 5.99951V13.9995"></svg:path><svg:path stroke-linecap="round" d="M32.001 23.9998H24.001"></svg:path><svg:path d="M42 5.99951L24 23.9995"></svg:path><svg:path stroke-linecap="round" d="M42.0005 5.99951H34.0005"></svg:path></svg:g>`,
})
export class IconParkStretchingIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
