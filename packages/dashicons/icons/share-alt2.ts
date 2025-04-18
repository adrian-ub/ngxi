import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[dashiconsShareAlt2Icon],svg[dashicons-share-alt2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m18 8l-5 4V9.01c-2.58.06-4.88.45-7 2.99c.29-3.57 2.66-5.66 7-5.94V3zM4 14h11v-2l2-1.6V16H2V5h9.43c-1.83.32-3.31 1-4.41 2H4z"></svg:path>`,
})
export class DashiconsShareAlt2Icon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
