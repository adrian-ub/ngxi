import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsPaperDuotoneIcon],svg[lets-icons-paper-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".25" d="M15 8.211v11.855c0 .411 0 .617-.132.687s-.303-.043-.645-.271l-1.946-1.297c-.134-.09-.201-.134-.277-.134s-.143.044-.277.134l-2.446 1.63c-.134.09-.201.134-.277.134s-.143-.044-.277-.134l-2.446-1.63c-.134-.09-.201-.134-.277-.134s-.143.044-.277.134l-1.946 1.297c-.342.228-.513.342-.645.271C3 20.683 3 20.477 3 20.066V7c0-1.886 0-2.828.586-3.414S5.114 3 7 3h11l-.328.219c-1.308.872-1.962 1.308-2.317 1.971S15 6.64 15 8.211"></svg:path><svg:path fill="currentColor" d="M15 6a3 3 0 1 1 6 0v2a1 1 0 0 1-1 1h-4.5a.5.5 0 0 1-.5-.5z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" d="M5.5 9.5h7m-7 3h4m-4 3h6"></svg:path></svg:g>`,
})
export class LetsIconsPaperDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
