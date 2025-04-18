import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowDownload20RegularIcon],svg[fluent-arrow-download-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.5 17a.5.5 0 0 1 .09.992L15.5 18h-11a.5.5 0 0 1-.09-.992L4.5 17zM10 2.002a.5.5 0 0 1 .492.41l.008.09l-.004 11.794l3.645-3.648a.5.5 0 0 1 .638-.059l.07.058a.5.5 0 0 1 .058.638l-.058.07l-4.492 4.5a.5.5 0 0 1-.255.136l-.106.01a.5.5 0 0 1-.395-.195l-4.457-4.451a.5.5 0 0 1 .637-.766l.07.058l3.645 3.641L9.5 2.502a.5.5 0 0 1 .5-.5"></svg:path>`,
})
export class FluentArrowDownload20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
