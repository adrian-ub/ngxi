import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zondiconsNewsPaperIcon],svg[zondicons-news-paper-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 2h4v15a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V0h16zm0 2v13a1 1 0 0 0 1 1a1 1 0 0 0 1-1V4zM2 2v15a1 1 0 0 0 1 1h11.17a3 3 0 0 1-.17-1V2zm2 8h8v2H4zm0 4h8v2H4zM4 4h8v4H4z"></svg:path>`,
})
export class ZondiconsNewsPaperIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
