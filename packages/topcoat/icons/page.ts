import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[topcoatPageIcon],svg[topcoat-page-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M22.5 1.5h-14c-2.55 0-3 .561-3 3v32c0 2.49.55 3 3 3h24c2.5 0 3-.47 3-3v-22h-13zm13 10l-10-10v10z"></svg:path>`,
})
export class TopcoatPageIcon {
  readonly viewBox = input("0 0 42 42")
  readonly width = input("1em")
  readonly height = input("1em")
}
