import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oiLayersIcon],svg[oi-layers-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 0v4h4V0zm5 2v3H2v1h4V2zm2 2v3H4v1h4V4z"></svg:path>`,
})
export class OiLayersIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
