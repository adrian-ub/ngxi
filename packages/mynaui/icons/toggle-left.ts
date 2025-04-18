import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiToggleLeftIcon],svg[mynaui-toggle-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M21 12a5 5 0 0 0-5-5H8a5 5 0 0 0 0 10h8a5 5 0 0 0 5-5"></svg:path><svg:path d="M5.5 12a2.5 2.5 0 1 0 5 0a2.5 2.5 0 0 0-5 0"></svg:path></svg:g>`,
})
export class MynauiToggleLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
