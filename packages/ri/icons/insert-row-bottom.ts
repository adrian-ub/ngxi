import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riInsertRowBottomIcon],svg[ri-insert-row-bottom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 13a5 5 0 1 1 0 10a5 5 0 0 1 0-10m1 2h-2v1.999L9 17v2l2-.001V21h2v-2.001L15 19v-2l-2-.001zm7-12a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zM5 5v4h14V5z"></svg:path>`,
})
export class RiInsertRowBottomIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
