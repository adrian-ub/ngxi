import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideLabBraSportsIcon],svg[lucide-lab-bra-sports-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m17 21l-9-9V3H4v10.6A4 4 0 0 0 6 21h12a4 4 0 0 0 2-7.4V3h-4v9l-4 4m-4-5h8"></svg:path>`,
})
export class LucideLabBraSportsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
