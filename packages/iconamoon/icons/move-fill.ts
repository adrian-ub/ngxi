import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconamoonMoveFillIcon],svg[iconamoon-move-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12.707 2.293a1 1 0 0 0-1.414 0l-2 2A1 1 0 0 0 10 6h1v5H6v-1a1 1 0 0 0-1.707-.707l-2 2a1 1 0 0 0 0 1.414l2 2A1 1 0 0 0 6 14v-1h5v5h-1a1 1 0 0 0-.707 1.707l2 2a1 1 0 0 0 1.414 0l2-2A1 1 0 0 0 14 18h-1v-5h5v1a1 1 0 0 0 1.707.707l2-2a1 1 0 0 0 0-1.414l-2-2A1 1 0 0 0 18 10v1h-5V6h1a1 1 0 0 0 .707-1.707z" clip-rule="evenodd"></svg:path>`,
})
export class IconamoonMoveFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
