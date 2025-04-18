import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentBookToolbox16FilledIcon],svg[fluent-book-toolbox-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 2v-.5A1.5 1.5 0 0 1 9.5 0h2A1.5 1.5 0 0 1 13 1.5V2h.5A1.5 1.5 0 0 1 15 3.5V5h-2v-.5a.5.5 0 0 0-1 0V5H9v-.5a.5.5 0 0 0-1 0V5H6V3.5A1.5 1.5 0 0 1 7.5 2zm1-.5V2h3v-.5a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 0-.5.5M13 6h2v1.5A1.5 1.5 0 0 1 13.5 9h-6A1.5 1.5 0 0 1 6 7.5V6h2v.5a.5.5 0 0 0 1 0V6h3v.5a.5.5 0 0 0 1 0zM5 3.5a2.5 2.5 0 0 1 2.042-2.458L7.05 1H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h7.5a.5.5 0 0 0 0-1H5a1 1 0 0 1-1-1v-.003h8.5a.5.5 0 0 0 .5-.5V10H7.5A2.5 2.5 0 0 1 5 7.5z"></svg:path>`,
})
export class FluentBookToolbox16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
