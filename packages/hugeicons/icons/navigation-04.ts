import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsNavigation04Icon],svg[hugeicons-navigation-04-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M15.708 8.33c.943.935-.566 8.533-2.114 8.667c-1.298.112-1.703-2.45-1.976-3.26c-.27-.802-.57-1.09-1.365-1.353c-2.019-.668-3.028-1.002-3.228-1.53c-.53-1.4 7.479-3.717 8.683-2.523"></svg:path><svg:path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10"></svg:path></svg:g>`,
})
export class HugeiconsNavigation04Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
