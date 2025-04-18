import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignBridge2FilledIcon],svg[tdesign-bridge-2-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3c-1.744 0-3.485.59-5.048 2.01c-1.542 1.402-2.867 3.573-3.9 6.674q-.162.487-.31.969c-.232.743-.458 1.468-.756 2.144c-.428.974-.877 1.523-1.368 1.726L0 16.778V21h9v-7a3 3 0 1 1 6 0v7h9v-4.222l-.618-.255c-.491-.203-.94-.752-1.369-1.726c-.297-.676-.523-1.401-.755-2.144q-.148-.481-.31-.97c-1.033-3.1-2.358-5.27-3.9-6.673C15.485 3.59 13.744 3 12 3"></svg:path>`,
})
export class TdesignBridge2FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
