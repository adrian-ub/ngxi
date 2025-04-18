import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[entypoSquaredPlusIcon],svg[entypo-squared-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m-1 9h-4v4H9v-4H5V9h4V5h2v4h4z"></svg:path>`,
})
export class EntypoSquaredPlusIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
