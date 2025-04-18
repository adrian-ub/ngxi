import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkPencilIcon],svg[icon-park-pencil-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M30.9995 8.99902L38.9995 16.999"></svg:path><svg:path d="M7.99953 31.999L35.9994 4L43.9995 11.999L15.9995 39.999L5.99951 41.999L7.99953 31.999Z"></svg:path><svg:path d="M30.9995 8.99902L38.9995 16.999"></svg:path><svg:path d="M8.99951 31.999L15.9995 38.999"></svg:path><svg:path d="M12.9995 34.999L34.9995 12.999"></svg:path></svg:g>`,
})
export class IconParkPencilIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
