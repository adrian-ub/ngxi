import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flatColorIconsShippedIcon],svg[flat-color-icons-shipped-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#8BC34A" d="M43 36H29V14h10.6c.9 0 1.6.6 1.9 1.4L45 26v8c0 1.1-.9 2-2 2"></svg:path><svg:path fill="#388E3C" d="M29 36H5c-1.1 0-2-.9-2-2V9c0-1.1.9-2 2-2h22c1.1 0 2 .9 2 2z"></svg:path><svg:g fill="#37474F"><svg:circle cx="37" cy="36" r="5"></svg:circle><svg:circle cx="13" cy="36" r="5"></svg:circle></svg:g><svg:g fill="#78909C"><svg:circle cx="37" cy="36" r="2"></svg:circle><svg:circle cx="13" cy="36" r="2"></svg:circle></svg:g><svg:path fill="#37474F" d="M41 25h-7c-.6 0-1-.4-1-1v-7c0-.6.4-1 1-1h5.3c.4 0 .8.3.9.7l1.7 5.2c0 .1.1.2.1.3V24c0 .6-.4 1-1 1"></svg:path><svg:path fill="#DCEDC8" d="m21.8 13.8l-7.9 7.9l-3.7-3.8L8 20.1l5.9 5.9L24 15.9z"></svg:path>`,
})
export class FlatColorIconsShippedIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
