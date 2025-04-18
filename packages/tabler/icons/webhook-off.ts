import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerWebhookOffIcon],svg[tabler-webhook-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M4.876 13.61A4 4 0 1 0 11 17h6m-1.934 3.502a4 4 0 0 0 4.763-.675M21 17a4 4 0 0 0-4-4"></svg:path><svg:path d="M16 8a4 4 0 0 0-6.824-2.833M8 8c0 1.506.77 2.818 2 3.5L7 17M3 3l18 18"></svg:path></svg:g>`,
})
export class TablerWebhookOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
