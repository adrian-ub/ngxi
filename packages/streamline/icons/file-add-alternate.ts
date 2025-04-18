import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineFileAddAlternateIcon],svg[streamline-file-add-alternate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M2.5 5V1.5a1 1 0 0 1 1-1H10L13.5 4v8.5a1 1 0 0 1-1 1h-5m-4-6v6m-3-3h6"></svg:path>`,
})
export class StreamlineFileAddAlternateIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
