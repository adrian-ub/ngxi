import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTicketDiagonal28FilledIcon],svg[fluent-ticket-diagonal-28-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.585 2.914a2.56 2.56 0 0 0-3.715-.095L2.801 14.887a2.563 2.563 0 0 0 .072 3.694l1.375 1.271c.714.66 1.692.513 2.29.27a1.667 1.667 0 0 1 2.216 2.05c-.195.615-.266 1.602.448 2.262l1.02.944a2.56 2.56 0 0 0 3.535-.053l11.528-11.322a2.563 2.563 0 0 0 .107-3.545l-1.075-1.192c-.635-.703-1.592-.664-2.2-.494a1.669 1.669 0 0 1-2.002-2.217c.232-.589.369-1.537-.266-2.24z"></svg:path>`,
})
export class FluentTicketDiagonal28FilledIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
