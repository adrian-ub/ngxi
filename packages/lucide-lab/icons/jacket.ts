import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideLabJacketIcon],svg[lucide-lab-jacket-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M8 4c0 1.1 1.8 2 4 2s4-.9 4-2V3c0-.6-.4-1-1-1H9c-.6 0-1 .4-1 1Z"></svg:path><svg:path d="M8 4c0 2 4 5 4 10v8m0-8c0-5 4-8 4-10M6 19H3c-.6 0-1-.4-1-1V7c0-1.1.8-2.3 1.9-2.6L8 3"></svg:path><svg:path d="M18 9v12c0 .6-.4 1-1 1H7c-.6 0-1-.4-1-1V9"></svg:path><svg:path d="m16 3l4.1 1.4C21.2 4.7 22 5.9 22 7v11c0 .6-.4 1-1 1h-3M6 15l2-2m10 2l-2-2"></svg:path></svg:g>`,
})
export class LucideLabJacketIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
