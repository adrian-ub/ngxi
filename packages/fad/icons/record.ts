import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fadRecordIcon],svg[fad-record-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M128 209c-44.735 0-81-36.265-81-81s36.265-81 81-81s81 36.265 81 81s-36.265 81-81 81m.5-33c26.51 0 48-21.49 48-48s-21.49-48-48-48s-48 21.49-48 48s21.49 48 48 48"></svg:path>`,
})
export class FadRecordIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
