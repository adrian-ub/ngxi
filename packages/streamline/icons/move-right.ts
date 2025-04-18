import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineMoveRightIcon],svg[streamline-move-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7.5 7h6M11 4.5L13.5 7L11 9.5m-9.5 4H4a1 1 0 0 0 1-1v-11a1 1 0 0 0-1-1H1.5a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1"></svg:path>`,
})
export class StreamlineMoveRightIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
