import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideLabFlowerLotusIcon],svg[lucide-lab-flower-lotus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M12 20c0-5.5-4.5-10-10-10c0 5.5 4.5 10 10 10"></svg:path><svg:path d="M9.7 8.3c-1.8-2-3.8-3.1-3.8-3.1s-.8 2.5-.5 5.4"></svg:path><svg:path d="M15 12.9V12c0-4.4-3-8-3-8s-3 3.6-3 8v.9"></svg:path><svg:path d="M18.6 10.6c.3-2.9-.5-5.4-.5-5.4s-2 1-3.8 3.1"></svg:path><svg:path d="M12 20c5.5 0 10-4.5 10-10c-5.5 0-10 4.5-10 10"></svg:path></svg:g>`,
})
export class LucideLabFlowerLotusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
