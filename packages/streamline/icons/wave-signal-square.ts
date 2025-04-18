import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineWaveSignalSquareIcon],svg[streamline-wave-signal-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M10.5.5h-7a3 3 0 0 0-3 3v7a3 3 0 0 0 3 3h7a3 3 0 0 0 3-3v-7a3 3 0 0 0-3-3"></svg:path><svg:path d="M.5 7.02h4L6 4.51l1.5 5.5l2-2.99h4"></svg:path></svg:g>`,
})
export class StreamlineWaveSignalSquareIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
