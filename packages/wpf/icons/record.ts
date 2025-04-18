import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[wpfRecordIcon],svg[wpf-record-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 6.188a6.812 6.812 0 1 0 0 13.625a6.812 6.812 0 1 0 0-13.625"></svg:path>`,
})
export class WpfRecordIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}
