import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laLongArrowAltLeftIcon],svg[la-long-arrow-alt-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.813 9.281L4.093 16l6.72 6.719l1.406-1.438L7.938 17H28v-2H7.937l4.282-4.281z"></svg:path>`,
})
export class LaLongArrowAltLeftIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
