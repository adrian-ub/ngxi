import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsBitcoinMindIcon],svg[hugeicons-bitcoin-mind-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M15.5 22v-.5c0-1.105.932-2 1.922-2.489c.963-.476 1.772-1.26 1.875-2.18L19.5 15l2-1l-2.5-3.75a8.25 8.25 0 1 0-13 6.746m0 0V22m0-5.004c.75.53 1.594.937 2.5 1.194"></svg:path><svg:path d="M8.938 12.667V7.333m1.562 0V6m0 8v-1.333M8.938 10h3.124m0 0c.518 0 .938.448.938 1v.667c0 .552-.42 1-.937 1H8M12.063 10c.517 0 .937-.448.937-1v-.667c0-.552-.42-1-.937-1H8"></svg:path></svg:g>`,
})
export class HugeiconsBitcoinMindIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
