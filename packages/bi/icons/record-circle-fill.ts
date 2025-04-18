import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[biRecordCircleFillIcon],svg[bi-record-circle-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-8 3a3 3 0 1 0 0-6a3 3 0 0 0 0 6"></svg:path>`,
})
export class BiRecordCircleFillIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
