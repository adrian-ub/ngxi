import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsLeaveIcon],svg[pepicons-leave-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2"><svg:path stroke-linejoin="round" d="m15.667 8l2.083 2.5L15.667 8Zm0 5l2.083-2.5l-2.083 2.5Z" clip-rule="evenodd"></svg:path><svg:path d="M16.5 10.5H10m-6-7h9m-9 14h9m0-14v4m0 6v4m-9-14v14"></svg:path></svg:g>`,
})
export class PepiconsLeaveIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
