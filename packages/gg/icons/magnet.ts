import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggMagnetIcon],svg[gg-magnet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-opacity=".5" d="M8 2.5H4v3h4zm12 0h-4v3h4z"></svg:path><svg:path d="M8 7.5H4v6a8 8 0 1 0 16 0v-6h-4v6a4 4 0 0 1-8 0z"></svg:path></svg:g>`,
})
export class GgMagnetIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
