import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideFileStackIcon],svg[lucide-file-stack-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M21 7h-3a2 2 0 0 1-2-2V2"></svg:path><svg:path d="M21 6v6.5c0 .8-.7 1.5-1.5 1.5h-7c-.8 0-1.5-.7-1.5-1.5v-9c0-.8.7-1.5 1.5-1.5H17Z"></svg:path><svg:path d="M7 8v8.8c0 .3.2.6.4.8s.5.4.8.4H15"></svg:path><svg:path d="M3 12v8.8c0 .3.2.6.4.8s.5.4.8.4H11"></svg:path></svg:g>`,
})
export class LucideFileStackIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
