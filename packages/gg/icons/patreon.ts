import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggPatreonIcon],svg[gg-patreon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M21 10a6 6 0 1 1-12 0a6 6 0 0 1 12 0" opacity=".5"></svg:path><svg:path d="M3 4h4v16H3z"></svg:path></svg:g>`,
})
export class GgPatreonIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
