import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTrayItemRemove20FilledIcon],svg[fluent-tray-item-remove-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1zm1.854 5.146a.5.5 0 0 0-.708 0l-2 2a.5.5 0 0 0 .708.708L13 8.707V14.5a.5.5 0 0 0 1 0V8.707l1.146 1.147a.5.5 0 0 0 .708-.708zM5 11a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1zm-2 2.5a.5.5 0 0 0-1 0V15a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-1.5a.5.5 0 0 0-1 0V15a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1z"></svg:path>`,
})
export class FluentTrayItemRemove20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
