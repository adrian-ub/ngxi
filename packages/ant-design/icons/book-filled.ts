import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[antDesignBookFilledIcon],svg[ant-design-book-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M832 64H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32M668 345.9L621.5 312L572 347.4V124h96z"></svg:path>`,
})
export class AntDesignBookFilledIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}
