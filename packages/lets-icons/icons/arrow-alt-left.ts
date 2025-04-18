import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsArrowAltLeftIcon],svg[lets-icons-arrow-alt-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m5 12l-.707-.707l-.707.707l.707.707zm12 1a1 1 0 1 0 0-2zM8.293 7.293l-4 4l1.414 1.414l4-4zm-4 5.414l4 4l1.414-1.414l-4-4zM5 13h12v-2H5z"></svg:path>`,
})
export class LetsIconsArrowAltLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
