import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phSailboatThinIcon],svg[ph-sailboat-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M243.61 174.27A4 4 0 0 0 240 172H140v-32h76a4 4 0 0 0 3-6.69l-79-86.86V8a4 4 0 0 0-7.1-2.52l-104 128A4 4 0 0 0 32 140h100v32H16a4 4 0 0 0-3.12 6.5l29.59 37a12 12 0 0 0 9.37 4.5h152.32a12 12 0 0 0 9.37-4.5l29.59-37a4 4 0 0 0 .49-4.23M207 132h-67V58.35Zm-166.6 0L132 19.27V132Zm166.88 78.5a4 4 0 0 1-3.12 1.5H51.84a4 4 0 0 1-3.12-1.5L24.32 180h207.36Z"></svg:path>`,
})
export class PhSailboatThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
