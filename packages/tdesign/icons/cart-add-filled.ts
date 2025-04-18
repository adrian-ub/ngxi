import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignCartAddFilledIcon],svg[tdesign-cart-add-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.764 1H0v2h3.236l2.73 10.011L4.72 18H22v-2H7.28l.5-2h11.94l3.667-11H5.31zM17 9.5h-2.5V12h-2V9.5H10v-2h2.5V5h2v2.5H17zM6 19a2 2 0 1 0 0 4a2 2 0 0 0 0-4m14 0a2 2 0 1 0 0 4a2 2 0 0 0 0-4"></svg:path>`,
})
export class TdesignCartAddFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
