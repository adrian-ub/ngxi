import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideLabBaconIcon],svg[lucide-lab-bacon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M22 8c-2 5-5 2-7 7s-5 2-7 7l-6-6c2-5 5-2 7-7s5-2 7-7Z"></svg:path><svg:path d="M5 19c2-5 5-2 7-7s5-2 7-7"></svg:path></svg:g>`,
})
export class LucideLabBaconIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
