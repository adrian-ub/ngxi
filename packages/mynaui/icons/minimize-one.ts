import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiMinimizeOneIcon],svg[mynaui-minimize-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M20 10h-6V4M4 14h6v6M20 4l-6 6m-4 4l-6 6"></svg:path>`,
})
export class MynauiMinimizeOneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
