import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[f7LineHorizontal3Icon],svg[f7-line-horizontal-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.063 19.539h43.851c.984 0 1.805-.773 1.805-1.758c0-.984-.82-1.781-1.805-1.781H6.063a1.78 1.78 0 0 0-1.782 1.781a1.76 1.76 0 0 0 1.782 1.758m0 10.219h43.851c.984 0 1.805-.774 1.805-1.758c0-1.008-.82-1.805-1.805-1.805H6.063c-.985 0-1.782.797-1.782 1.805a1.76 1.76 0 0 0 1.782 1.758m0 10.242h43.851c.984 0 1.805-.797 1.805-1.805c0-.984-.82-1.758-1.805-1.758H6.063a1.76 1.76 0 0 0-1.782 1.758c0 1.008.797 1.805 1.782 1.805"></svg:path>`,
})
export class F7LineHorizontal3Icon {
  readonly viewBox = input("0 0 56 56")
  readonly width = input("1em")
  readonly height = input("1em")
}
