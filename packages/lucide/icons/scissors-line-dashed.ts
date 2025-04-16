import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideScissorsLineDashedIcon],svg[lucide-scissors-line-dashed-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M5.42 9.42L8 12"></svg:path><svg:circle cx="4" cy="8" r="2"></svg:circle><svg:path d="m14 6l-8.58 8.58"></svg:path><svg:circle cx="4" cy="16" r="2"></svg:circle><svg:path d="M10.8 14.8L14 18m2-6h-2m8 0h-2"></svg:path></svg:g>`,
})
export class LucideScissorsLineDashedIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
