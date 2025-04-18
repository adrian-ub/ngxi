import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsNodeRemoveIcon],svg[hugeicons-node-remove-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M13.5 19.5h-1c-2.828 0-4.243 0-5.121-.879C6.5 17.743 6.5 16.328 6.5 13.5v-2m0-2.5v2.5m0 0h7m0 0c0-1.178 0-1.768.351-2.134C14.204 9 14.77 9 15.9 9h1.2c1.131 0 1.697 0 2.048.366c.352.366.352.956.352 2.134s0 1.768-.352 2.134c-.35.366-.917.366-2.048.366h-1.2c-1.131 0-1.697 0-2.049-.366s-.351-.956-.351-2.134"></svg:path><svg:path d="M13.5 19.5c0-1.178 0-1.768.351-2.134C14.204 17 14.77 17 15.9 17h1.2c1.131 0 1.697 0 2.048.366c.352.366.352.956.352 2.134s0 1.768-.352 2.134c-.35.366-.917.366-2.048.366h-1.2c-1.131 0-1.697 0-2.049-.366s-.351-.956-.351-2.134M9 2L6.5 4.5m0 0L4 7m2.5-2.5L9 7M6.5 4.5L4 2"></svg:path></svg:g>`,
})
export class HugeiconsNodeRemoveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
