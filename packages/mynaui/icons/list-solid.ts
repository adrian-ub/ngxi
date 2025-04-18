import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiListSolidIcon],svg[mynaui-list-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.25 6.5A.75.75 0 0 1 4 5.75h1a.75.75 0 0 1 0 1.5H4a.75.75 0 0 1-.75-.75m4 0A.75.75 0 0 1 8 5.75h12a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1-.75-.75m-4 5.5a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5H4a.75.75 0 0 1-.75-.75m4 0a.75.75 0 0 1 .75-.75h12a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1-.75-.75m-4 5.5a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5H4a.75.75 0 0 1-.75-.75m4 0a.75.75 0 0 1 .75-.75h12a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1-.75-.75"></svg:path>`,
})
export class MynauiListSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
