import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iwwaAngleLeftIcon],svg[iwwa-angle-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M24.96 32.601L12.371 19.997l.088-.088l12.507-12.52a.66.66 0 0 0-.01-.921a.65.65 0 0 0-.458-.182a.65.65 0 0 0-.465.186l-13.004 13.02a.63.63 0 0 0-.176.49a.66.66 0 0 0 .18.523l13.014 13.031c.244.23.659.233.921-.02a.66.66 0 0 0-.008-.915"></svg:path>`,
})
export class IwwaAngleLeftIcon {
  readonly viewBox = input("0 0 40 40")
  readonly width = input("1em")
  readonly height = input("1em")
}
