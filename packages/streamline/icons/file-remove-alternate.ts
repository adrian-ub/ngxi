import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineFileRemoveAlternateIcon],svg[streamline-file-remove-alternate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M2.5 7.5v-6a1 1 0 0 1 1-1H10L13.5 4v8.5a1 1 0 0 1-1 1h-6m-6-3h5"></svg:path>`,
})
export class StreamlineFileRemoveAlternateIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
