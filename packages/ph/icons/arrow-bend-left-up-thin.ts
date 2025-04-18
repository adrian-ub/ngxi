import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phArrowBendLeftUpThinIcon],svg[ph-arrow-bend-left-up-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M204 224a4 4 0 0 1-4 4a100.11 100.11 0 0 1-100-100V41.66L58.83 82.83a4 4 0 0 1-5.66-5.66l48-48a4 4 0 0 1 5.66 0l48 48a4 4 0 0 1-5.66 5.66L108 41.66V128a92.1 92.1 0 0 0 92 92a4 4 0 0 1 4 4"></svg:path>`,
})
export class PhArrowBendLeftUpThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
