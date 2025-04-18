import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTriangleRight48FilledIcon],svg[fluent-triangle-right-48-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M40.773 20.471c2.99 1.617 2.966 5.916-.041 7.5L11.23 43.503C8.4 44.994 5 42.942 5 39.744V8.255c0-3.22 3.44-5.27 6.272-3.738z"></svg:path>`,
})
export class FluentTriangleRight48FilledIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
