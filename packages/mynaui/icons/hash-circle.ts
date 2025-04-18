import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiHashCircleIcon],svg[mynaui-hash-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 12a9 9 0 1 1-18 0a9 9 0 0 1 18 0M10.905 8l-1.437 8m4.937-8l-1.437 8m3.314-5.75H7.718m8.564 3.5H7.718"></svg:path>`,
})
export class MynauiHashCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
