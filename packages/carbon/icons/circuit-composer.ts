import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonCircuitComposerIcon],svg[carbon-circuit-composer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M18 9v6h-4V9h-2v14h2v-6h4v6h2V9h-2z" fill="currentColor"></svg:path><svg:path d="M30 15h-4V6a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v9H2v2h4v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-9h4zM8 26V6h16v20z" fill="currentColor"></svg:path>`,
})
export class CarbonCircuitComposerIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
