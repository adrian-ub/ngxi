import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideWashingMachineIcon],svg[lucide-washing-machine-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M3 6h3m11 0h.01"></svg:path><svg:rect width="18" height="20" x="3" y="2" rx="2"></svg:rect><svg:circle cx="12" cy="13" r="5"></svg:circle><svg:path d="M12 18a2.5 2.5 0 0 0 0-5a2.5 2.5 0 0 1 0-5"></svg:path></svg:g>`,
})
export class LucideWashingMachineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
