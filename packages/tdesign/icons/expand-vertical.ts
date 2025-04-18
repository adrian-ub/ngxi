import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignExpandVerticalIcon],svg[tdesign-expand-vertical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 3.5H4v-2h16zm-8 .586L16.914 9L15.5 10.414l-2.5-2.5v8.172l2.5-2.5L16.914 15L12 19.914L7.086 15L8.5 13.586l2.5 2.5V7.914l-2.5 2.5L7.086 9zM20 22.5H4v-2h16z"></svg:path>`,
})
export class TdesignExpandVerticalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
