import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsIpodIcon],svg[hugeicons-ipod-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M19.5 13.5v-3c0-3.759 0-5.638-.929-6.893a4.3 4.3 0 0 0-.49-.554C16.976 2 15.317 2 12 2S7.025 2 5.918 3.053q-.265.253-.49.554C4.5 4.862 4.5 6.741 4.5 10.5v3c0 3.759 0 5.638.929 6.892q.223.302.49.555C7.024 22 8.683 22 12 22s4.975 0 6.082-1.053q.265-.253.49-.555c.928-1.254.928-3.133.928-6.892"></svg:path><svg:path d="M15 16a3 3 0 1 1-6 0a3 3 0 0 1 6 0M4.5 10h15"></svg:path></svg:g>`,
})
export class HugeiconsIpodIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
