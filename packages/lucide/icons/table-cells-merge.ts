import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideTableCellsMergeIcon],svg[lucide-table-cells-merge-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M12 21v-6m0-6V3M3 15h18M3 9h18"></svg:path><svg:rect width="18" height="18" x="3" y="3" rx="2"></svg:rect></svg:g>`,
})
export class LucideTableCellsMergeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
