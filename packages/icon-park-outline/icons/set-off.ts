import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineSetOffIcon],svg[icon-park-outline-set-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="4"><svg:path stroke-miterlimit="2" d="M29 14a5 5 0 1 0 0-10a5 5 0 0 0 0 10Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" d="m24 19l-4.29 8l7.6 6.02c.31.24.53.57.66.94L31.31 44m-11.6-17l-5.2 7.64C12.973 36.888 10.5 39.5 9.5 41"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" d="m42 24l-6.94.1c-.36 0-.72-.09-1.04-.27l-3.27-1.91c-4.01-2.35-8.4-3.96-12.97-4.78l-3.22-.57L12 21"></svg:path><svg:path stroke-linejoin="round" d="m8.652 19.103l6.373 3.68l-4.5 7.794l-6.373-3.68z"></svg:path></svg:g>`,
})
export class IconParkOutlineSetOffIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
