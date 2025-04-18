import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignArrowLeftRight3Icon],svg[tdesign-arrow-left-right-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.914 7.5L15.5 12.914L14.086 11.5l3-3H8.5v-2h8.586l-3-3L15.5 2.086zm-5.414 10H6.914l3 3L8.5 21.914L3.086 16.5L8.5 11.086L9.914 12.5l-3 3H15.5z"></svg:path>`,
})
export class TdesignArrowLeftRight3Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
