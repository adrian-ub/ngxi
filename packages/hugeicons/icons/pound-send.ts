import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsPoundSendIcon],svg[hugeicons-pound-send-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M22 13h-7.5m7.5 0c0 .7-1.994 2.008-2.5 2.5M22 13c0-.7-1.994-2.008-2.5-2.5m-7.067-1.591c0-2.682-2.67-6.573-6.802-4.142c-1.388.918-3.18 3.969-1.017 7.17c1.052 1.556 2.091 1.784 4.975 1.784H2m4.474.286c-.538 1.494-2.168 4.892-4.379 5.98h8.886c.409 0 1.624.212 3.019-1.063" color="currentColor"></svg:path>`,
})
export class HugeiconsPoundSendIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
