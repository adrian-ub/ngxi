import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[grommetIconsStackOverflowIcon],svg[grommet-icons-stack-overflow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M19.127 21.866v-6.43h2.134V24H2v-8.563h2.134v6.43z"></svg:path><svg:path d="m6.49 14.827l10.475 2.19l.444-2.107l-10.476-2.19zm1.385-4.989l9.7 4.518l.887-1.94l-9.7-4.545zm2.688-4.766l8.231 6.845l1.358-1.635l-8.23-6.846zM15.884 0l-1.718 1.275l6.374 8.591l1.719-1.275zM6.268 19.704h10.697V17.57H6.268z"></svg:path></svg:g>`,
})
export class GrommetIconsStackOverflowIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
