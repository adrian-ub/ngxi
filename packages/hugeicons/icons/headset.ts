import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsHeadsetIcon],svg[hugeicons-headset-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M15 12a2 2 0 0 1 2-2a4 4 0 0 1 0 8a2 2 0 0 1-2-2zm-6 0a2 2 0 0 0-2-2a4 4 0 0 0 0 8a2 2 0 0 0 2-2z"></svg:path><svg:path d="M3 14v-3a9 9 0 0 1 18 0v4.846c0 2.009 0 3.013-.352 3.796a4 4 0 0 1-2.006 2.006c-.783.352-1.787.352-3.796.352H12"></svg:path></svg:g>`,
})
export class HugeiconsHeadsetIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
