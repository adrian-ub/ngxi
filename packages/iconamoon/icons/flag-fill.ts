import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconamoonFlagFillIcon],svg[iconamoon-flag-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M20 14a1 1 0 0 0 .894-1.447L19.118 9l1.776-3.553A1 1 0 0 0 20 4H9V3a1 1 0 1 0-2 0v18a1 1 0 1 0 2 0v-7z" clip-rule="evenodd"></svg:path>`,
})
export class IconamoonFlagFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
