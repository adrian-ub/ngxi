import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsTimeManagementIcon],svg[hugeicons-time-management-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2 19.5c0-1.178 0-1.768.44-2.134C2.878 17 3.585 17 5 17s2.121 0 2.56.366s.44.956.44 2.134s0 1.768-.44 2.134C7.122 22 6.415 22 5 22s-2.121 0-2.56-.366S2 20.678 2 19.5m14 0c0-1.178 0-1.768.44-2.134C16.878 17 17.585 17 19 17s2.121 0 2.56.366s.44.956.44 2.134s0 1.768-.44 2.134C21.122 22 20.415 22 19 22s-2.121 0-2.56-.366S16 20.678 16 19.5m3-2.5c0-2.482-.744-3-4.308-3H9.308C5.744 14 5 14.518 5 17m7-10.5L13 5m3.5 1.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0" color="currentColor"></svg:path>`,
})
export class HugeiconsTimeManagementIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
