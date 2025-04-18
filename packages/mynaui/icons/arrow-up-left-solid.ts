import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiArrowUpLeftSolidIcon],svg[mynaui-arrow-up-left-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.5 5.75a.75.75 0 0 1 .75.75l-4.345 4.345l6.125 6.125a.75.75 0 1 1-1.06 1.06l-6.125-6.125L6.5 16.25a.75.75 0 0 1-.75-.75v-9a.75.75 0 0 1 .75-.75z"></svg:path>`,
})
export class MynauiArrowUpLeftSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
