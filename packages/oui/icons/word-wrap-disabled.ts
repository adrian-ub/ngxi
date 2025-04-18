import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ouiWordWrapDisabledIcon],svg[oui-word-wrap-disabled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 3.5L12 2v1H2v1h10v1zM12 9V8H2V7h10V6l2 1.5zm0 3v1l2-1.5l-2-1.5v1H2v1z"></svg:path>`,
})
export class OuiWordWrapDisabledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
