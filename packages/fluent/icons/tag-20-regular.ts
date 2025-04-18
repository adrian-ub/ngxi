import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTag20RegularIcon],svg[fluent-tag-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 7a1 1 0 1 0 0-2a1 1 0 0 0 0 2m-2.87-5a2 2 0 0 0-1.426.584L3.022 9.249a2 2 0 0 0-.002 2.83l4.949 4.948a2 2 0 0 0 2.828 0l6.631-6.63a2 2 0 0 0 .586-1.418l-.008-4.95a2 2 0 0 0-1.986-1.997zm-.72 1.292A1 1 0 0 1 11.123 3l4.89.032a1 1 0 0 1 .993.999l.008 4.95a1 1 0 0 1-.293.708l-6.63 6.631a1 1 0 0 1-1.415 0l-4.949-4.948a1 1 0 0 1 .001-1.415z"></svg:path>`,
})
export class FluentTag20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
