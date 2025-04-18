import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[radixIconsTextAlignMiddleIcon],svg[radix-icons-text-align-middle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.5 14.9a.4.4 0 0 0 .4-.4v-4.034l1.317 1.317a.4.4 0 0 0 .565-.566l-2-2a.4.4 0 0 0-.565 0l-2 2a.4.4 0 0 0 .565.566L3.1 10.466V14.5c0 .22.18.4.4.4M8 10.5a.5.5 0 0 0 .5.5h6a.5.5 0 1 0 0-1h-6a.5.5 0 0 0-.5.5m0-3a.5.5 0 0 0 .5.5h6a.5.5 0 0 0 0-1h-6a.5.5 0 0 0-.5.5M8.5 5a.5.5 0 1 1 0-1h6a.5.5 0 0 1 0 1zM3.9.5a.4.4 0 0 0-.8 0v4.034L1.781 3.217a.4.4 0 0 0-.565.566l2 2a.4.4 0 0 0 .565 0l2-2a.4.4 0 0 0-.565-.566L3.899 4.534z" clip-rule="evenodd"></svg:path>`,
})
export class RadixIconsTextAlignMiddleIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
