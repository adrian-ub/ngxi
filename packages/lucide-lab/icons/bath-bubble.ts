import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideLabBathBubbleIcon],svg[lucide-lab-bath-bubble-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M15 3h.01"></svg:path><svg:circle cx="11.5" cy="6.5" r=".5"></svg:circle><svg:circle cx="16.5" cy="7.5" r=".5"></svg:circle><svg:path d="M2 12h6m5 3H8v-3c0-.6.4-1 1-1h3c.6 0 1 .4 1 1Zm0-3h9"></svg:path><svg:path d="M4 12v5a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5M7 19v2m10-2v2"></svg:path></svg:g>`,
})
export class LucideLabBathBubbleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
