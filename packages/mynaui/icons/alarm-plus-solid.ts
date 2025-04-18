import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiAlarmPlusSolidIcon],svg[mynaui-alarm-plus-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.284 2.388a.75.75 0 0 0-.867 1.224l3.15 2.231a.75.75 0 0 0 .867-1.224zm-11.7 1.224a.75.75 0 0 0-.867-1.224l-3.15 2.231a.75.75 0 0 0 .867 1.224zM3.25 13a8.75 8.75 0 1 1 17.5 0a8.75 8.75 0 0 1-17.5 0M12 9.75a.75.75 0 0 0-.75.75v1.75H9.5a.75.75 0 0 0 0 1.5h1.75v1.75a.75.75 0 0 0 1.5 0v-1.75h1.75a.75.75 0 0 0 0-1.5h-1.75V10.5a.75.75 0 0 0-.75-.75"></svg:path>`,
})
export class MynauiAlarmPlusSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
