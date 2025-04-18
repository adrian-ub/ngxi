import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideBotIcon],svg[lucide-bot-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M12 8V4H8"></svg:path><svg:rect width="16" height="12" x="4" y="8" rx="2"></svg:rect><svg:path d="M2 14h2m16 0h2m-7-1v2m-6-2v2"></svg:path></svg:g>`,
})
export class LucideBotIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
