import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsScooter03Icon],svg[hugeicons-scooter-03-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:circle cx="12" cy="4" r="2"></svg:circle><svg:path d="M10 4H6m12 0h-4M9 20c-1.327-.035-2.1-.172-2.578-.695c-.647-.709-.453-1.79-.064-3.955l.612-3.4c.245-1.364.368-2.046.724-2.564c.351-.509.86-.908 1.459-1.145C9.763 8 10.508 8 12 8s2.238 0 2.847.241a3.2 3.2 0 0 1 1.459 1.145c.356.518.479 1.2.724 2.564l.611 3.4c.39 2.164.584 3.246-.063 3.955c-.476.52-1.244.659-2.56.695M12 18v4"></svg:path></svg:g>`,
})
export class HugeiconsScooter03Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
