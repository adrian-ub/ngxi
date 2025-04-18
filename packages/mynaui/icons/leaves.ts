import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiLeavesIcon],svg[mynaui-leaves-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 12.07V20m0-8.07c0-4.353 3.538-7.887 7.919-7.93q.08.556.081 1.132c0 4.353-3.538 7.886-7.919 7.93A8 8 0 0 1 12 11.928m0 0C12 7.576 8.462 4.042 4.081 4q-.08.556-.081 1.132c0 4.353 3.538 7.886 7.919 7.93A8 8 0 0 0 12 11.928"></svg:path>`,
})
export class MynauiLeavesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
