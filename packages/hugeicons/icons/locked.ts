import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsLockedIcon],svg[hugeicons-locked-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2.5 8.187c.104-2.1.415-3.41 1.347-4.34c.93-.932 2.24-1.243 4.34-1.347M21.5 8.187c-.104-2.1-.415-3.41-1.347-4.34c-.93-.932-2.24-1.243-4.34-1.347m0 19c2.1-.104 3.41-.415 4.34-1.347c.932-.93 1.243-2.24 1.347-4.34M8.187 21.5c-2.1-.104-3.41-.415-4.34-1.347c-.932-.93-1.243-2.24-1.347-4.34m7-5.258c0-.842-.132-2.141.376-2.899c1.123-1.673 3.504-1.451 4.344.182c.412.802.257 1.923.276 2.717m-4.996 0c-1.297 0-1.562.742-1.76 1.325c-.183.655-.37 2.22-.084 3.935c.214 1.092 1.049 1.572 1.767 1.633c.687.058 3.587.036 4.426.036c1.301 0 2.113-.286 2.495-1.597c.183-1.019.233-2.842-.072-4.007c-.404-1.165-1.22-1.325-1.776-1.325m-4.996 0c1.374-.055 4.21-.044 4.996 0" color="currentColor"></svg:path>`,
})
export class HugeiconsLockedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
