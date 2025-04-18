import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignChevronUpDoubleIcon],svg[tdesign-chevron-up-double-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16.5 18.414l-4.5-4.5l-4.5 4.5L6.086 17L12 11.086L17.914 17zm0-6.5l-4.5-4.5l-4.5 4.5L6.086 10.5L12 4.586l5.914 5.914z"></svg:path>`,
})
export class TdesignChevronUpDoubleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
