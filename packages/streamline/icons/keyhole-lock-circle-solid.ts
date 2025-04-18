import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineKeyholeLockCircleSolidIcon],svg[streamline-keyhole-lock-circle-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14 7A7 7 0 1 1 0 7a7 7 0 0 1 14 0m-6 .732a2 2 0 1 0-2 0V9.5a1 1 0 1 0 2 0z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineKeyholeLockCircleSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
