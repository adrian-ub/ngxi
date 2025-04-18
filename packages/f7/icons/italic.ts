import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[f7ItalicIcon],svg[f7-italic-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.734 44.758H32.57c1.102 0 1.875-.68 1.875-1.781c0-1.055-.75-1.735-1.851-1.735H27.32l5.696-26.484h5.25c1.101 0 1.875-.68 1.875-1.781c0-1.055-.75-1.735-1.852-1.735H23.43c-1.1 0-1.874.68-1.874 1.735c0 1.101.797 1.78 1.898 1.78h5.227l-5.696 26.485h-5.273c-1.102 0-1.852.68-1.852 1.735c0 1.101.774 1.78 1.875 1.78"></svg:path>`,
})
export class F7ItalicIcon {
  readonly viewBox = input("0 0 56 56")
  readonly width = input("1em")
  readonly height = input("1em")
}
