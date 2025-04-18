import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideLabHelmetDivingIcon],svg[lucide-lab-helmet-diving-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M16 17.9c1.5-.9 2.7-2.2 3.4-3.9h.8c.4 0 .8-.4.8-1V9c0-.6-.4-1-.8-1h-.8A7.92 7.92 0 0 0 15 3.6v-.8c0-.4-.4-.8-1-.8h-4c-.6 0-1 .4-1 .8v.8A7.92 7.92 0 0 0 4.6 8h-.8c-.4 0-.8.4-.8 1v4c0 .6.4 1 .8 1h.8c.7 1.7 1.9 3 3.4 3.9"></svg:path><svg:circle cx="12" cy="11" r="4"></svg:circle><svg:path d="M8 11h8m-4-4v8m-5.3 2c-1 .6-1.7 1.2-1.7 2c0 1.7 3.1 3 7 3s7-1.3 7-3c0-.8-.7-1.4-1.7-2"></svg:path></svg:g>`,
})
export class LucideLabHelmetDivingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
