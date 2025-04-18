import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[simpleIconsAddydotioIcon],svg[simple-icons-addydotio-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 6.81V6c0-.305-.033-.605-.075-.9C17.489 2.217 15 0 12 0S6.51 2.217 6.075 5.1A6 6 0 0 0 6 6v.81A5.99 5.99 0 0 0 3 12v6a6 6 0 0 0 6 6h6c0-1.655-1.345-3-3-3H9c-1.655 0-3-1.345-3-3v-6c0-1.655 1.345-3 3-3h6c1.655 0 3 1.345 3 3v1.5a3 3 0 0 1-1.5 2.597V12c0-.83-.67-1.5-1.5-1.5H9c-.83 0-1.5.67-1.5 1.5v6c0 .83.67 1.5 1.5 1.5h6c1.055 0 2.04-.272 2.902-.75A6 6 0 0 0 21 13.5V12a5.99 5.99 0 0 0-3-5.19m-4.5 9.69h-3v-3h3zM9 6c0-.548.15-1.06.408-1.5A3 3 0 0 1 12 3c1.106 0 2.077.605 2.592 1.5c.258.44.408.952.408 1.5Z"></svg:path>`,
})
export class SimpleIconsAddydotioIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
