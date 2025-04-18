import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsBackspaceIcon],svg[ls-backspace-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M253 94h452c35 0 63 28 63 63v379c0 35-28 64-63 64H253L0 347zm313 408l57-56l-100-99l100-99l-57-57l-99 99l-98-99l-57 56l99 100l-99 98l57 56l99-98z"></svg:path>`,
})
export class LsBackspaceIcon {
  readonly viewBox = input("0 0 768 614")
  readonly width = input("1.26em")
  readonly height = input("1em")
}
