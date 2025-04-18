import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideLabFloppyDisksRearIcon],svg[lucide-lab-floppy-disks-rear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M8 18a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h10l4 4v10a2 2 0 0 1-2 2Z"></svg:path><svg:circle cx="14" cy="10" r="2"></svg:circle><svg:path d="M14 18v-2m4 6H4a2 2 0 0 1-2-2V6"></svg:path></svg:g>`,
})
export class LucideLabFloppyDisksRearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
