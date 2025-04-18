import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineiconsEmojiExpressionlessFlatEyesIcon],svg[lineicons-emoji-expressionless-flat-eyes-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.093 14.238a.75.75 0 0 0 0 1.5h7.814a.75.75 0 0 0 0-1.5zM6.692 9.167a.75.75 0 0 1 .75-.75h2.285a.75.75 0 1 1 0 1.5H7.442a.75.75 0 0 1-.75-.75m7.594-.75a.75.75 0 0 0 0 1.5h2.272a.75.75 0 1 0 0-1.5z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10s10-4.477 10-10S17.523 2 12 2M3.5 12a8.5 8.5 0 1 1 17 0a8.5 8.5 0 0 1-17 0" clip-rule="evenodd"></svg:path>`,
})
export class LineiconsEmojiExpressionlessFlatEyesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
