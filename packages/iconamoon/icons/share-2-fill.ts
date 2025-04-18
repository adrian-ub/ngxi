import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconamoonShare2FillIcon],svg[iconamoon-share-2-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11 14a1 1 0 1 0 2 0V6h2a1 1 0 0 0 .707-1.707l-3-3a1 1 0 0 0-1.414 0l-3 3A1 1 0 0 0 9 6h2zM4 8a1 1 0 0 0-1 1v9a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V9a1 1 0 0 0-1-1h-2a1 1 0 1 0 0 2h1v8a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-8h1a1 1 0 1 0 0-2z" clip-rule="evenodd"></svg:path>`,
})
export class IconamoonShare2FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
