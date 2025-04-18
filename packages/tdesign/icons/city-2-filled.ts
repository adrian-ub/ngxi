import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignCity2FilledIcon],svg[tdesign-city-2-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m6 .698l4 3.334v6.833l5-4.167l7 5.834V22h-3.5v-7h-7v7H2V4.032zM8 20V4.968L6 3.302L4 4.968V20z"></svg:path><svg:path fill="currentColor" d="M13.5 22v-5h3v5z"></svg:path>`,
})
export class TdesignCity2FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
