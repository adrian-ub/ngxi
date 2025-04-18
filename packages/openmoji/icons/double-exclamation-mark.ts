import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiDoubleExclamationMarkIcon],svg[openmoji-double-exclamation-mark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="#d22f27"><svg:ellipse cx="26.669" cy="59.435" rx="3" ry="3.023"></svg:ellipse><svg:path d="M26.57 49.964a2.485 2.485 0 0 1-2.5-2.519V11.977a2.5 2.5 0 1 1 5 0v35.468a2.485 2.485 0 0 1-2.5 2.519"></svg:path><svg:ellipse cx="45.331" cy="59.435" rx="3" ry="3.023"></svg:ellipse><svg:path d="M45.23 49.964a2.485 2.485 0 0 1-2.5-2.519V11.977a2.5 2.5 0 1 1 5 0v35.468a2.485 2.485 0 0 1-2.5 2.519"></svg:path></svg:g><svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:ellipse cx="26.669" cy="60.081" rx="3" ry="3.023"></svg:ellipse><svg:ellipse cx="45.331" cy="60.081" rx="3" ry="3.023"></svg:ellipse><svg:path d="M26.67 49.964a2.485 2.485 0 0 1-2.5-2.519V11.977a2.5 2.5 0 1 1 5 0v35.468a2.485 2.485 0 0 1-2.5 2.519m18.66 0a2.485 2.485 0 0 1-2.5-2.519V11.977a2.5 2.5 0 1 1 5 0v35.468a2.485 2.485 0 0 1-2.5 2.519"></svg:path></svg:g>`,
})
export class OpenmojiDoubleExclamationMarkIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
