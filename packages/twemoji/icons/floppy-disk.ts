import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[twemojiFloppyDiskIcon],svg[twemoji-floppy-disk-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#31373D" d="M4 36s-4 0-4-4V4s0-4 4-4h26c1 0 2 1 2 1l3 3s1 1 1 2v26s0 4-4 4z"></svg:path><svg:path fill="#55ACEE" d="M5 19v-1s0-2 2-2h21c2 0 2 2 2 2v1z"></svg:path><svg:path fill="#E1E8ED" d="M5 32.021V19h25v13s0 2-2 2H7c-2 0-2-1.979-2-1.979M10 3s0-1 1-1h18c1.048 0 1 1 1 1v10s0 1-1 1H11s-1 0-1-1zm12 10h5V3h-5z"></svg:path>`,
})
export class TwemojiFloppyDiskIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
