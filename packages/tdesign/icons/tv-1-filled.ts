import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignTv1FilledIcon],svg[tdesign-tv-1-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 3h24v15h-4.046l2.698 2.063l-1.215 1.589L16.66 18H7.336l-4.771 3.652l-1.216-1.588L4.044 18H0z"></svg:path>`,
})
export class TdesignTv1FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
