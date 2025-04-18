import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[codiconIndentIcon],svg[codicon-indent-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4 5v1.984a.5.5 0 0 0 .5.5h6.882L9.749 5.851l.707-.707l2.121 2.121l.423.423v.568L10.456 10.8l-.707-.707l1.61-1.609H4.5a1.5 1.5 0 0 1-1.5-1.5V5z" clip-rule="evenodd"></svg:path>`,
})
export class CodiconIndentIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
