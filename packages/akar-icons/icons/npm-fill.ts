import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[akarIconsNpmFillIcon],svg[akar-icons-npm-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#akarIconsNpmFill0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M24 0H0v24h24zM2.578 2.578H21.42V21.42h-4.75V7.33h-4.751v14.09h-9.34z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="akarIconsNpmFill0"><svg:path fill="#fff" d="M0 0h24v24H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class AkarIconsNpmFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
