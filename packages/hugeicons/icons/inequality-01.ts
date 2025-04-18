import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsInequality01Icon],svg[hugeicons-inequality-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 20h18m0-4H6.838c-2.38 0-3.571 0-3.803-.627s.702-1.32 2.57-2.705L17.303 4" color="currentColor"></svg:path>`,
})
export class HugeiconsInequality01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
