import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[feWineGlassIcon],svg[fe-wine-glass-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9 20h2v-6a4 4 0 0 1-4-4V4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v6a4 4 0 0 1-4 4v6h2a1 1 0 0 1 0 2H9a1 1 0 0 1 0-2M9 4v6a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2V4z"></svg:path>`,
})
export class FeWineGlassIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
