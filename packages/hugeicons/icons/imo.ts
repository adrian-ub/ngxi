import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsImoIcon],svg[hugeicons-imo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12c0 1.821.487 3.53 1.338 5L2 22l5-1.338A9.96 9.96 0 0 0 12 22"></svg:path><svg:path d="M7.009 9H7m.001 2v4m1.912 0v-2.75c0-.69.535-1.25 1.196-1.25s1.195.56 1.195 1.25m0 0V15m0-2.75c0-.69.536-1.25 1.196-1.25s1.196.56 1.196 1.25V15m1.913-2.75v1.5c0 .69.535 1.25 1.195 1.25S18 14.44 18 13.75v-1.5c0-.69-.535-1.25-1.196-1.25s-1.195.56-1.195 1.25"></svg:path></svg:g>`,
})
export class HugeiconsImoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
