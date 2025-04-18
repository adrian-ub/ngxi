import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineSignalLoadingSolidIcon],svg[streamline-signal-loading-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.7 3.958a.75.75 0 0 1 .024 1.06L1.832 7l1.892 1.982a.75.75 0 0 1-1.085 1.036l-2.387-2.5a.75.75 0 0 1 0-1.036l2.387-2.5a.75.75 0 0 1 1.06-.024Zm6.6 0a.75.75 0 0 1 1.061.024l2.387 2.5a.75.75 0 0 1 0 1.036l-2.387 2.5a.75.75 0 0 1-1.085-1.036L12.17 7l-1.893-1.982a.75.75 0 0 1 .025-1.06ZM4.5 6.25a.75.75 0 1 1 0 1.5a.75.75 0 0 1 0-1.5M7.75 7a.75.75 0 1 0-1.5 0a.75.75 0 0 0 1.5 0m2.5 0a.75.75 0 1 0-1.5 0a.75.75 0 0 0 1.5 0" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineSignalLoadingSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
