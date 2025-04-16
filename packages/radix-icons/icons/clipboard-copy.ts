import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[radixIconsClipboardCopyIcon],svg[radix-icons-clipboard-copy-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5 2V1h5v1zm-.25-2A.75.75 0 0 0 4 .75V1h-.5A1.5 1.5 0 0 0 2 2.5v10A1.5 1.5 0 0 0 3.5 14H7v-1H3.5a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5H4v.25c0 .414.336.75.75.75h5.5a.75.75 0 0 0 .75-.75V2h.5a.5.5 0 0 1 .5.5V7h1V2.5A1.5 1.5 0 0 0 11.5 1H11V.75a.75.75 0 0 0-.75-.75zM9 8.5a.5.5 0 1 1-1 0a.5.5 0 0 1 1 0m1.5.5a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1m2.5-.5a.5.5 0 1 1-1 0a.5.5 0 0 1 1 0m1.5.5a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1m.5 1.5a.5.5 0 1 1-1 0a.5.5 0 0 1 1 0m-.5 2.5a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1m0 2a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1m-6-4a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1m.5 1.5a.5.5 0 1 1-1 0a.5.5 0 0 1 1 0M8.5 15a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1m2.5-.5a.5.5 0 1 1-1 0a.5.5 0 0 1 1 0m1.5.5a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1" clip-rule="evenodd"></svg:path>`,
})
export class RadixIconsClipboardCopyIcon {
  readonly viewBox = input('0 0 15 15')
  readonly width = input('1em')
  readonly height = input('1em')
}
