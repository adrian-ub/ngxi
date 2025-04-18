import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsMergeSharpIcon],svg[material-symbols-merge-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.4 21L5 19.6l6-6.025v-6.75L9.4 8.4L8 7l4-4l4 4l-1.4 1.4L13 6.825v6.75l6 6.025l-1.4 1.4l-5.6-5.6z"></svg:path>`,
})
export class MaterialSymbolsMergeSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
