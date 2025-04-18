import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignFileRestoreIcon],svg[tdesign-file-restore-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 1h12.414L21 6.586V12h-2V9h-6V3H5v18h7v2H3zm12 2.414V7h3.586zM18.414 13l-1 1H18a5 5 0 1 1-5 5v-1h2v1a3 3 0 1 0 3-3h-.586l1 1L17 18.414L13.586 15L17 11.586z"></svg:path>`,
})
export class TdesignFileRestoreIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
