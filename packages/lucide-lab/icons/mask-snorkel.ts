import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideLabMaskSnorkelIcon],svg[lucide-lab-mask-snorkel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M13.5 14a2 2 0 0 1-1.4-.6l-.7-.8c-.8-.8-2-.8-2.8 0l-.7.8a2 2 0 0 1-1.4.6H6a4 4 0 0 1 0-8h8a4 4 0 0 1 0 8ZM12 18a2 2 0 0 1-4 0"></svg:path><svg:path d="M10 20a2 2 0 0 0 2 2h4c3.3 0 6-2.7 6-6V2h-4v14a2 2 0 0 1-2 2m2-8h4"></svg:path><svg:circle cx="4.5" cy="21.5" r=".5"></svg:circle><svg:path d="M3 17.5h.01"></svg:path></svg:g>`,
})
export class LucideLabMaskSnorkelIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
