import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideUniversityIcon],svg[lucide-university-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:circle cx="12" cy="10" r="1"></svg:circle><svg:path d="M22 20V8h-4l-6-4l-6 4H2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2M6 17v.01M6 13v.01M18 17v.01M18 13v.01"></svg:path><svg:path d="M14 22v-5a2 2 0 0 0-2-2a2 2 0 0 0-2 2v5"></svg:path></svg:g>`,
})
export class LucideUniversityIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
