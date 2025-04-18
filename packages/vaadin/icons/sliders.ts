import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vaadinSlidersIcon],svg[vaadin-sliders-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 0h2v3H7zM6 4v3h1v9h2V7h1V4zM2 0h2v8H2zM1 9v3h1v4h2v-4h1V9zm11-9h2v10h-2zm-1 11v3h1v2h2v-2h1v-3z"></svg:path>`,
})
export class VaadinSlidersIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
