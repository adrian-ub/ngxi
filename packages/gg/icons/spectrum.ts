import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggSpectrumIcon],svg[gg-spectrum-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 16h4a8 8 0 0 0-8-8v4a4 4 0 0 1 4 4"></svg:path>`,
})
export class GgSpectrumIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
