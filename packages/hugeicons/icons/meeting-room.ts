import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsMeetingRoomIcon],svg[hugeicons-meeting-room-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M17 16V8c0-2.357 0-3.536-.732-4.268S14.357 3 12 3H8c-2.357 0-3.536 0-4.268.732S3 5.643 3 8v8c0 2.357 0 3.535.732 4.268S5.643 21 8 21h4c2.357 0 3.536 0 4.268-.732C17 19.535 17 18.357 17 16"></svg:path><svg:path d="M11 21h6c1.886 0 2.828 0 3.414-.586S21 18.886 21 17v-7c0-1.886 0-2.828-.586-3.414S18.886 6 17 6m-4 5v2"></svg:path></svg:g>`,
})
export class HugeiconsMeetingRoomIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
