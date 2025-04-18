import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiArrowUpRightSolidIcon],svg[mynaui-arrow-up-right-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.5 5.75a.75.75 0 0 0-.75.75l4.345 4.345L5.97 16.97a.75.75 0 1 0 1.06 1.06l6.125-6.125L17.5 16.25a.75.75 0 0 0 .75-.75v-9a.75.75 0 0 0-.75-.75z"></svg:path>`,
})
export class MynauiArrowUpRightSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
