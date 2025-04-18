import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowSort20RegularIcon],svg[fluent-arrow-sort-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.354 7.354L4.998 4.71V16.5a.5.5 0 0 0 1 0V4.705l2.649 2.65a.5.5 0 0 0 .707-.708l-3.49-3.49l-.01-.01A.5.5 0 0 0 5.5 3h-.002a.5.5 0 0 0-.383.179L1.646 6.647a.5.5 0 1 0 .708.707m15.293 5.292l-2.644 2.644V3.5a.5.5 0 0 0-1 0v11.795l-2.65-2.65a.5.5 0 0 0-.707.708l3.49 3.49l.01.01a.5.5 0 0 0 .355.147h.002a.5.5 0 0 0 .383-.179l3.468-3.468a.5.5 0 1 0-.707-.707"></svg:path>`,
})
export class FluentArrowSort20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
