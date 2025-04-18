import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerWebhookIcon],svg[tabler-webhook-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M4.876 13.61A4 4 0 1 0 11 17h6"></svg:path><svg:path d="M15.066 20.502A4 4 0 1 0 17 13c-.706 0-1.424.179-2 .5L12 8"></svg:path><svg:path d="M16 8a4 4 0 1 0-8 0c0 1.506.77 2.818 2 3.5L7 17"></svg:path></svg:g>`,
})
export class TablerWebhookIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
