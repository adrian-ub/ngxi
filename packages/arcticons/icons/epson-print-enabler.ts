import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsEpsonPrintEnablerIcon],svg[arcticons-epson-print-enabler-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="26.341" height="10.27" x="6.765" y="11.62" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="1.536" ry="1.536"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M27.983 23.246v-1.355H11.887v9.318c0 .848.688 1.536 1.536 1.536h7.403M13.423 5.5h13.024c.848 0 1.536.688 1.536 1.536v4.585H11.887V7.036c0-.848.688-1.536 1.536-1.536m2.162 20.244h8.7m-8.7 3.871h5.188"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.601 32.727h-.862v-4.505h-4.505v-.878a2.634 2.634 0 1 0-5.269 0v.878H23.46v4.505h.863a2.634 2.634 0 1 1 0 5.268h-.863V42.5h4.505v-.878a2.634 2.634 0 1 1 5.269 0v.878h4.505v-4.505h.862a2.634 2.634 0 1 0 0-5.268"></svg:path>`,
})
export class ArcticonsEpsonPrintEnablerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
