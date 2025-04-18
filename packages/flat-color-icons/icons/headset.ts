import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flatColorIconsHeadsetIcon],svg[flat-color-icons-headset-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#0097A7" d="M24 5C14.1 5 6 13.1 6 23v15h4V23c0-7.7 6.3-14 14-14s14 6.3 14 14v15h4V23c0-9.9-8.1-18-18-18"></svg:path><svg:path fill="#37474F" d="M38 43h-4V31h4c2.2 0 4 1.8 4 4v4c0 2.2-1.8 4-4 4m-28 0h4V31h-4c-2.2 0-4 1.8-4 4v4c0 2.2 1.8 4 4 4"></svg:path>`,
})
export class FlatColorIconsHeadsetIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
