import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsHangoutIcon],svg[hugeicons-hangout-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M12 22c4 0 9-6 9-11s-4.03-9-9-9s-9 4-9 9s4.03 9 9 9z"></svg:path><svg:path d="M10.5 11.5V10c0-.943 0-1.414-.293-1.707S9.443 8 8.5 8s-1.414 0-1.707.293S6.5 9.057 6.5 10v.5c0 .466 0 .699.076.883a1 1 0 0 0 .541.54c.184.077.714.077 1.18.077c.214.906-.297 2-.297 2a2.5 2.5 0 0 0 2.5-2.5m7 0V10c0-.943 0-1.414-.293-1.707S16.443 8 15.5 8s-1.414 0-1.707.293S13.5 9.057 13.5 10v.5c0 .466 0 .699.076.883a1 1 0 0 0 .541.54c.184.077.714.077 1.18.077c.214.906-.297 2-.297 2a2.5 2.5 0 0 0 2.5-2.5"></svg:path></svg:g>`,
})
export class HugeiconsHangoutIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
