import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiLeavesSolidIcon],svg[mynaui-leaves-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.088 3.25a.75.75 0 0 0-.75.643a9 9 0 0 0-.088 1.24c0 4.548 3.524 8.27 8 8.647V20a.75.75 0 0 0 1.5 0v-6.22c4.476-.377 8-4.1 8-8.648q0-.63-.089-1.24a.75.75 0 0 0-.75-.642A8.76 8.76 0 0 0 12 8.407A8.76 8.76 0 0 0 4.088 3.25"></svg:path>`,
})
export class MynauiLeavesSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
