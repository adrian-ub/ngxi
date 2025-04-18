import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggLogOutIcon],svg[gg-log-out-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M8.514 20h-4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h4v2h-4v12h4z"></svg:path><svg:path d="m13.842 17.385l1.42-1.408l-3.92-3.953h9.144a1 1 0 1 0 0-2h-9.162l3.98-3.947l-1.408-1.42l-6.391 6.337z"></svg:path></svg:g>`,
})
export class GgLogOutIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
