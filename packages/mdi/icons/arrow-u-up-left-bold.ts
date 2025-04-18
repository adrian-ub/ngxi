import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiArrowUUpLeftBoldIcon],svg[mdi-arrow-u-up-left-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.5 21C9.36 21 6 17.64 6 13.5V11H2l6-7l6 7h-4v2.5c0 1.93 1.57 3.5 3.5 3.5s3.5-1.57 3.5-3.5V6h4v7.5c0 4.14-3.36 7.5-7.5 7.5"></svg:path>`,
})
export class MdiArrowUUpLeftBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
