import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiReceiptTextArrowRightIcon],svg[mdi-receipt-text-arrow-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.5 3.5L18 2l-1.5 1.5L15 2l-1.5 1.5L12 2l-1.5 1.5L9 2L7.5 3.5L6 2L4.5 3.5L3 2v20l1.5-1.5L6 22l1.5-1.5L9 22l1.5-1.5L12 22l1.26-1.26c-.17-.56-.26-1.15-.26-1.74c0-.68.12-1.36.34-2H6v-2h8.53A6 6 0 0 1 21 13.34V2zM18 13H6v-2h12zm0-4H6V7h12zm1 13v-2h-4v-2h4v-2l3 3z"></svg:path>`,
})
export class MdiReceiptTextArrowRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
