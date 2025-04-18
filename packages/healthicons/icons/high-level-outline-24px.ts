import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsHighLevelOutline24pxIcon],svg[healthicons-high-level-outline-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M12 3a10 10 0 0 0-7.071 17.071l.707.707l2.421-2.421l-1.414-1.414l-.963.962A8 8 0 0 1 4.063 14H6v-2H4.063A8 8 0 0 1 5.68 8.095l.613.612l.5.5l1.414-1.414L7.095 6.68A8 8 0 0 1 11 5.063V6.5h2V5.063a8 8 0 0 1 3.905 1.617l-1.112 1.113l1.414 1.414l1.113-1.112A8 8 0 0 1 19.937 12H18v2h1.937a8 8 0 0 1-1.618 3.906l-.962-.963l-1.414 1.414l2.421 2.421l.707-.707A10.001 10.001 0 0 0 12 3"></svg:path><svg:path d="M12.707 12.293a1 1 0 0 0-1.414 1.414l3 3a1 1 0 0 0 1.414-1.414z"></svg:path></svg:g>`,
})
export class HealthiconsHighLevelOutline24pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
