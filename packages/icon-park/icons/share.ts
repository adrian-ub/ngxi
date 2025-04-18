import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkShareIcon],svg[icon-park-share-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M28 6H42V20"></svg:path><svg:path d="M42 29.4737V39C42 40.6569 40.6569 42 39 42H9C7.34315 42 6 40.6569 6 39V9C6 7.34315 7.34315 6 9 6L18 6"></svg:path><svg:path d="M25.7998 22.1999L41.0998 6.8999"></svg:path></svg:g>`,
})
export class IconParkShareIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
