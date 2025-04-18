import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[codiconNewlineIcon],svg[codicon-newline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 5.5v1.984a.5.5 0 0 1-.5.5H4.618l1.633-1.633l-.707-.707l-2.121 2.121L3 8.188v.568L5.544 11.3l.707-.707l-1.61-1.609H11.5a1.5 1.5 0 0 0 1.5-1.5V5.5z" clip-rule="evenodd"></svg:path>`,
})
export class CodiconNewlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
