import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsBitcoinUp01Icon],svg[hugeicons-bitcoin-up-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M12 9a6.5 6.5 0 1 0 0 13a6.5 6.5 0 0 0 0-13m2.5-4.5C14.008 3.994 12.7 2 12 2M9.5 4.5C9.992 3.994 11.3 2 12 2m0 0v4.5"></svg:path><svg:path d="M10.438 18.167v-5.334m1.562 0V11.5m0 8v-1.333M10.438 15.5h3.124m0 0c.518 0 .938.448.938 1v.667c0 .552-.42 1-.937 1H9.5m4.063-2.667c.517 0 .937-.448.937-1v-.667c0-.552-.42-1-.937-1H9.5"></svg:path></svg:g>`,
})
export class HugeiconsBitcoinUp01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
