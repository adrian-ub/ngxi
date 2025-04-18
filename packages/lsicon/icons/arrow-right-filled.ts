import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconArrowRightFilledIcon],svg[lsicon-arrow-right-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12.043 7.5L9.396 4.854l.708-.708L13.957 8l-3.853 3.854l-.708-.707L12.043 8.5H3v-1z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconArrowRightFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
