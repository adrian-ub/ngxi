import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineEmptyClipboardSolidIcon],svg[streamline-empty-clipboard-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5.5 0a1 1 0 0 0-1 1v.5a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1zM2.75 1h.5v.5A2.25 2.25 0 0 0 5.5 3.75h3a2.25 2.25 0 0 0 2.25-2.25V1h.5a1.5 1.5 0 0 1 1.5 1.5v10a1.5 1.5 0 0 1-1.5 1.5h-8.5a1.5 1.5 0 0 1-1.5-1.5v-10A1.5 1.5 0 0 1 2.75 1" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineEmptyClipboardSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
