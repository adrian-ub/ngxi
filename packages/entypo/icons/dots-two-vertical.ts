import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[entypoDotsTwoVerticalIcon],svg[entypo-dots-two-vertical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.001 8.2a2.2 2.2 0 1 0-.002-4.4a2.2 2.2 0 0 0 .002 4.4m0 3.6a2.2 2.2 0 1 0 0 4.402a2.2 2.2 0 0 0 0-4.402"></svg:path>`,
})
export class EntypoDotsTwoVerticalIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
