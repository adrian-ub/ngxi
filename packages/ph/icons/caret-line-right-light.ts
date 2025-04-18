import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phCaretLineRightLightIcon],svg[ph-caret-line-right-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M148.24 123.76a6 6 0 0 1 0 8.48l-80 80a6 6 0 0 1-8.48-8.48L135.51 128L59.76 52.24a6 6 0 0 1 8.48-8.48ZM184 42a6 6 0 0 0-6 6v160a6 6 0 0 0 12 0V48a6 6 0 0 0-6-6"></svg:path>`,
})
export class PhCaretLineRightLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
