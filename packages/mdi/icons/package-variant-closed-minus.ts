import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiPackageVariantClosedMinusIcon],svg[mdi-package-variant-closed-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m13 12.6l6-3.4V13c.7 0 1.4.1 2 .4V7.5c0-.4-.2-.7-.5-.9l-7.9-4.4c-.2-.1-.4-.2-.6-.2s-.4.1-.6.2L3.5 6.6c-.3.2-.5.5-.5.9v9c0 .4.2.7.5.9l7.9 4.4c.2.1.4.2.6.2s.4-.1.6-.2l.9-.5c-.3-.6-.4-1.3-.5-2M12 4.2l6 3.3l-2 1.1l-5.9-3.4zm-1 15.1l-6-3.4V9.2l6 3.4zm1-8.5L6 7.5l2-1.2l6 3.5zM23 18v2h-8v-2z"></svg:path>`,
})
export class MdiPackageVariantClosedMinusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
