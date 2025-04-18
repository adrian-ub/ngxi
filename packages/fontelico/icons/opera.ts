import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fontelicoOperaIcon],svg[fontelico-opera-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M425.518 1000c-567.358 0-567.356-1000 0-1000s567.358 1000 0 1000m0-91.74c237.715 0 237.714-816.52 0-816.52s-237.715 816.52 0 816.52"></svg:path>`,
})
export class FontelicoOperaIcon {
  readonly viewBox = input("0 0 851 1000")
  readonly width = input("0.86em")
  readonly height = input("1em")
}
