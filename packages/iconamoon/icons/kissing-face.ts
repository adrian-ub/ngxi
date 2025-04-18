import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconamoonKissingFaceIcon],svg[iconamoon-kissing-face-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round"><svg:circle cx="12" cy="12" r="9" stroke-linecap="round" stroke-width="2"></svg:circle><svg:path stroke-linecap="round" stroke-width="2" d="m13 16l-2-1l2-1"></svg:path><svg:path stroke-width="3" d="M9 9.5h.01v.01H9zm6 0h.01v.01H15z"></svg:path></svg:g>`,
})
export class IconamoonKissingFaceIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
