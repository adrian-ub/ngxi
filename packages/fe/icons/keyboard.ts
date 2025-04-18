import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[feKeyboardIcon],svg[fe-keyboard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2zm15 6v2h3v-2zm-3 0v2h2v-2zm-7 0v2h6v-2zm-3 0v2h2v-2zm14-3v2h2v-2zm-3 0v2h2v-2zm-3 0v2h2v-2zm-3 0v2h2v-2zm-5 0v2h4v-2zm12-3v2h4V8zm-3 0v2h2V8zm-3 0v2h2V8zM7 8v2h2V8zM4 8v2h2V8z"></svg:path>`,
})
export class FeKeyboardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
