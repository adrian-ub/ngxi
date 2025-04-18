import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flatColorIconsMindMapIcon],svg[flat-color-icons-mind-map-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#CFD8DC" d="m39.4 23l-.8-4L26 21.6V8h-4v12.3l-13.9-9l-2.2 3.4l15.2 9.8L9.4 39.8l3.2 2.4l11.3-14.8l8.4 12.7l3.4-2.2l-8.4-12.5z"></svg:path><svg:circle cx="24" cy="24" r="7" fill="#3F51B5"></svg:circle><svg:g fill="#00BCD4"><svg:circle cx="24" cy="8" r="5"></svg:circle><svg:circle cx="39" cy="21" r="5"></svg:circle><svg:circle cx="7" cy="13" r="5"></svg:circle><svg:circle cx="11" cy="41" r="5"></svg:circle><svg:circle cx="34" cy="39" r="5"></svg:circle></svg:g>`,
})
export class FlatColorIconsMindMapIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
