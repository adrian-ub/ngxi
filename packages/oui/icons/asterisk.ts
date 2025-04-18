import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ouiAsteriskIcon],svg[oui-asterisk-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.928 8.468L4 7.618l.446-1.427L7.375 7.25L7.287 4h1.484l-.097 3.296l2.88-1.039L12 7.693l-2.977.86l1.92 2.56L9.741 12L7.937 9.28l-1.745 2.654l-1.213-.86z"></svg:path>`,
})
export class OuiAsteriskIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
