import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggLogInIcon],svg[gg-log-in-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M15.486 20h4a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-4v2h4v12h-4z"></svg:path><svg:path d="m10.158 17.385l-1.42-1.408l3.92-3.953H3.513a1 1 0 1 1 0-2h9.163l-3.98-3.947l1.408-1.42l6.391 6.337z"></svg:path></svg:g>`,
})
export class GgLogInIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
