import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineWrenchIcon],svg[streamline-wrench-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.41 3.596a.76.76 0 0 0-.35-.51l-2 2a1 1 0 0 1-1.44 0l-.76-.68a1 1 0 0 1 0-1.4l2-2a.76.76 0 0 0-.48-.43a3.8 3.8 0 0 0-4.2 5.309L.815 11.252a1 1 0 0 0 .014 1.428l.561.538a1 1 0 0 0 1.396-.01l5.428-5.37a3.81 3.81 0 0 0 5.196-4.242"></svg:path>`,
})
export class StreamlineWrenchIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
