import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsQuillnoteIcon],svg[arcticons-quillnote-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:ellipse cx="29.465" cy="21.416" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="15.89" ry="6.4" transform="rotate(-74.222 29.465 21.417)"></svg:ellipse><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m33.786 6.125l-8.642 30.583m-.131-21.349l4.114 7.255m-1.743 6.166l6.766-1.77m1.474-3.878H42.5m-37 0h16.939m7.938 9.372H42.5m-37 0h17.914M5.5 41.875h18.419m-2.981-5.437l2.981 5.437l5.438-2.981"></svg:path>`,
})
export class ArcticonsQuillnoteIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
