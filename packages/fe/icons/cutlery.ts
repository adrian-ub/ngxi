import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[feCutleryIcon],svg[fe-cutlery-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9 13v8a1 1 0 0 1-2 0v-8a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2v6h2V2a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2m9-9v17a1 1 0 0 1-2 0v-6h-1a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2"></svg:path>`,
})
export class FeCutleryIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
