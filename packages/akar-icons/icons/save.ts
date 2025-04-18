import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[akarIconsSaveIcon],svg[akar-icons-save-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="2"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M7 21h10a4 4 0 0 0 4-4V7.414a1 1 0 0 0-.293-.707l-3.414-3.414A1 1 0 0 0 16.586 3H7a4 4 0 0 0-4 4v10a4 4 0 0 0 4 4"></svg:path><svg:path d="M9 3h6v3a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1zm8 18v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7"></svg:path><svg:path stroke-linecap="round" d="M11 17h2"></svg:path></svg:g>`,
})
export class AkarIconsSaveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
