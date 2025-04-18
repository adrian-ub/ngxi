import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[codiconKeyboardTabIcon],svg[codicon-keyboard-tab-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="m9 13.887l5-5V8.18l-5-5l-.707.707l4.146 4.147H2v1h10.44L8.292 13.18z" clip-rule="evenodd"></svg:path><svg:path d="M15 3h1v11h-1z"></svg:path></svg:g>`,
})
export class CodiconKeyboardTabIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
