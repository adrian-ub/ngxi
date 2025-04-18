import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDirectionLeft01Icon],svg[hugeicons-direction-left-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6.148 5.68c.678-.827 1.017-1.24 1.48-1.46S8.623 4 9.682 4H15v7H9.681c-1.059 0-1.589 0-2.052-.22s-.803-.633-1.48-1.46l-.27-.326C5.294 8.28 5 7.922 5 7.5s.293-.78.88-1.494zM15 21V3m-4 18h8" color="currentColor"></svg:path>`,
})
export class HugeiconsDirectionLeft01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
