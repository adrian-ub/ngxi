import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsSmartPhone03Icon],svg[hugeicons-smart-phone-03-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5.5 9c0-3.3 0-4.95.952-5.975S8.936 2 12 2s4.596 0 5.548 1.025S18.5 5.7 18.5 9v6c0 3.3 0 4.95-.952 5.975S15.064 22 12 22s-4.596 0-5.548-1.025S5.5 18.3 5.5 15zM12 19h.009M11 5h2m9 3.5s-1 .346-1 1.313c0 .966 1 1.22 1 2.187s-1 1.221-1 2.188c0 .966 1 1.312 1 1.312m-20-7s1 .346 1 1.313c0 .966-1 1.22-1 2.187s1 1.221 1 2.188c0 .966-1 1.312-1 1.312" color="currentColor"></svg:path>`,
})
export class HugeiconsSmartPhone03Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
