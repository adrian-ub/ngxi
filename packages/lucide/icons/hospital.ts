import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideHospitalIcon],svg[lucide-hospital-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M12 6v4m2 4h-4m4 4h-4m4-10h-4m8 4h2a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2h2"></svg:path><svg:path d="M18 22V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v18"></svg:path></svg:g>`,
})
export class LucideHospitalIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
