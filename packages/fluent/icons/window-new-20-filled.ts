import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentWindowNew20FilledIcon],svg[fluent-window-new-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.766 17a2.5 2.5 0 0 0 2.452-2.012A2 2 0 0 0 17 13V5a2 2 0 0 0-2-2H7a2 2 0 0 0-1.991 1.814A2.5 2.5 0 0 0 3 7.266V13.5A3.5 3.5 0 0 0 6.5 17zM4 7.266A1.5 1.5 0 0 1 5 5.85V13a2 2 0 0 0 2 2h7.18a1.5 1.5 0 0 1-1.414 1H6.5A2.5 2.5 0 0 1 4 13.5zM9.516 6H13.5a.5.5 0 0 1 .5.5v3.984a.5.5 0 0 1-1 0V7.707l-4.146 4.147a.5.5 0 0 1-.708-.708L12.293 7H9.516a.5.5 0 0 1 0-1"></svg:path>`,
})
export class FluentWindowNew20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
