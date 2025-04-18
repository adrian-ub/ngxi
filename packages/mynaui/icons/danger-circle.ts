import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiDangerCircleIcon],svg[mynaui-danger-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 12a9 9 0 1 1-18 0a9 9 0 0 1 18 0m-9-4.373v5.5m0 3.246v-.5"></svg:path>`,
})
export class MynauiDangerCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
