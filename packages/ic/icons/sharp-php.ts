import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpPhpIcon],svg[ic-sharp-php-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 9h1.5v6H13v-2.5h-2V15H9.5V9H11v2h2zM8 9v4H4.5v2H3V9zm-1.5 1.5h-2v1h2zm15-1.5v4H18v2h-1.5V9zM20 10.5h-2v1h2z"></svg:path>`,
})
export class IcSharpPhpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
