import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideSchoolIcon],svg[lucide-school-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M14 22v-4a2 2 0 1 0-4 0v4"></svg:path><svg:path d="m18 10l3.447 1.724a1 1 0 0 1 .553.894V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-7.382a1 1 0 0 1 .553-.894L6 10m12-5v17M4 6l7.106-3.553a2 2 0 0 1 1.788 0L20 6M6 5v17"></svg:path><svg:circle cx="12" cy="9" r="2"></svg:circle></svg:g>`,
})
export class LucideSchoolIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
