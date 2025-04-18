import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oiLightbulbIcon],svg[oi-lightbulb-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.41 0a.5.5 0 0 0-.13.06l-3 1.5a.5.5 0 1 0 .44.88l3-1.5A.5.5 0 0 0 4.41 0m1 1.5a.5.5 0 0 0-.13.06l-4 2a.5.5 0 1 0 .44.88l4-2a.5.5 0 0 0-.31-.94m0 2a.5.5 0 0 0-.13.06l-3 1.5A.5.5 0 0 0 2.5 6h2a.506.506 0 0 0 .16-1l1.06-.56a.5.5 0 0 0-.31-.94M2.85 7a.506.506 0 0 0 .16 1h1a.5.5 0 1 0 0-1h-1a.5.5 0 0 0-.09 0h-.06z"></svg:path>`,
})
export class OiLightbulbIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
