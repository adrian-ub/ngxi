import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiMaximizeOneIcon],svg[mynaui-maximize-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M14 4h6v6M10 20H4v-6M20 4l-6 6M4 20l6-6"></svg:path>`,
})
export class MynauiMaximizeOneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
