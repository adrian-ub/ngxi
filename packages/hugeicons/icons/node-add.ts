import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsNodeAddIcon],svg[hugeicons-node-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M13.5 19.5H13c-2.828 0-4.243 0-5.121-.879C7 17.743 7 16.328 7 13.5v-2m0-1v1m0 0h6.5m0 0c0-1.178 0-1.768.351-2.134C14.204 9 14.77 9 15.9 9h1.2c1.131 0 1.697 0 2.048.366c.352.366.352.956.352 2.134s0 1.768-.352 2.134c-.35.366-.917.366-2.048.366h-1.2c-1.131 0-1.697 0-2.049-.366s-.351-.956-.351-2.134"></svg:path><svg:path d="M13.5 19.5c0-1.178 0-1.768.351-2.134C14.204 17 14.77 17 15.9 17h1.2c1.131 0 1.697 0 2.048.366c.352.366.352.956.352 2.134s0 1.768-.352 2.134c-.35.366-.917.366-2.048.366h-1.2c-1.131 0-1.697 0-2.049-.366s-.351-.956-.351-2.134M7 2v6m3-3H4"></svg:path></svg:g>`,
})
export class HugeiconsNodeAddIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
