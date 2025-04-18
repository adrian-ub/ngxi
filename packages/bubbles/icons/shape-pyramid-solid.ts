import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bubblesShapePyramidSolidIcon],svg[bubbles-shape-pyramid-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22.51 21.68L13.32 1a1.37 1.37 0 0 0-2.63 0l-9.2 20.68a1.67 1.67 0 0 0 .09 1.6A1.65 1.65 0 0 0 3 24h18a1.65 1.65 0 0 0 1.42-.72a1.67 1.67 0 0 0 .09-1.6m-2.84-1.48a.27.27 0 0 1-.07.29a.24.24 0 0 1-.29 0l-6.44-3.86a.25.25 0 0 1-.12-.22V5.81a.26.26 0 0 1 .2-.25a.26.26 0 0 1 .28.14zm-7.8-2.2a.23.23 0 0 1 .25 0l6 3.59a.25.25 0 0 1 .11.28a.25.25 0 0 1-.23.13H6a.25.25 0 0 1-.24-.18a.24.24 0 0 1 .11-.28zm-1.1-12.28a.26.26 0 0 1 .28-.15a.26.26 0 0 1 .2.25v10.61a.26.26 0 0 1-.13.22L4.7 20.51a.26.26 0 0 1-.3 0a.24.24 0 0 1-.06-.29z"></svg:path>`,
})
export class BubblesShapePyramidSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
