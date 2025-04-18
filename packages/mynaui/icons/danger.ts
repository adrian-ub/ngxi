import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiDangerIcon],svg[mynaui-danger-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 19v-.5M12 5v10"></svg:path>`,
})
export class MynauiDangerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
