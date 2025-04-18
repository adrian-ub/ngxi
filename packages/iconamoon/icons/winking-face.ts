import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconamoonWinkingFaceIcon],svg[iconamoon-winking-face-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round"><svg:circle cx="12" cy="12" r="9" stroke-linecap="round" stroke-width="2"></svg:circle><svg:path stroke-width="3" d="M9 9.5h.01v.01H9z"></svg:path><svg:path stroke-linecap="round" stroke-width="2" d="M15.465 14A4 4 0 0 1 12 16a4 4 0 0 1-3.465-2M16.5 9.5h-3"></svg:path></svg:g>`,
})
export class IconamoonWinkingFaceIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
