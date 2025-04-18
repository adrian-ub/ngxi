import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsMergeIcon],svg[material-symbols-merge-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.4 21L5 19.6l4.825-4.85q.575-.575.875-1.3t.3-1.525v-5.1L9.4 8.4L8 7l4-4l4 4l-1.4 1.4L13 6.825v5.1q0 .8.3 1.525t.875 1.3L19 19.6L17.6 21L12 15.4z"></svg:path>`,
})
export class MaterialSymbolsMergeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
