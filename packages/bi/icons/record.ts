import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[biRecordIcon],svg[bi-record-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 12a4 4 0 1 1 0-8a4 4 0 0 1 0 8m0 1A5 5 0 1 0 8 3a5 5 0 0 0 0 10"></svg:path>`,
})
export class BiRecordIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
