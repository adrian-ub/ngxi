import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideNonBinaryIcon],svg[lucide-non-binary-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M12 2v10M8.5 4l7 4m-7 0l7-4"></svg:path><svg:circle cx="12" cy="17" r="5"></svg:circle></svg:g>`,
})
export class LucideNonBinaryIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
