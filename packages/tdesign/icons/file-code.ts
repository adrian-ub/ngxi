import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignFileCodeIcon],svg[tdesign-file-code-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.001 1h12.414l5.586 5.587V13h-2V9h-6V3h-8v18h6v2h-8zm12 2.415V7h3.586zm8.663 11.841l-2.776 2.749l2.776 2.748l-1.407 1.421l-4.212-4.17l4.212-4.17zM13 21h4.5v2H13z"></svg:path>`,
})
export class TdesignFileCodeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
