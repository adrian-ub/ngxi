import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggBrushIcon],svg[gg-brush-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M15 11h3a1 1 0 0 1 1 1v6a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3v-6a1 1 0 0 1 1-1h3V6a3 3 0 1 1 6 0zm-2-5a1 1 0 1 0-2 0v7H7v5a1 1 0 0 0 1 1h1v-3h2v3h2v-3h2v3h1a1 1 0 0 0 1-1v-5h-4z" clip-rule="evenodd"></svg:path>`,
})
export class GgBrushIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
