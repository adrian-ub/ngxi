import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiAlertRemoveOutlineIcon],svg[mdi-alert-remove-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 15.5h2v2h-2zm3 3.5v-.4H5.4L12 7.3l4.11 7.14c.51-.44 1.09-.79 1.73-1.03L12 3.3L2 20.6h12.22c-.14-.51-.22-1.04-.22-1.6m-1-8.5h-2v4h2zm9.12 4.96L20 17.59l-2.12-2.13l-1.41 1.42L18.59 19l-2.12 2.12l1.41 1.42L20 20.41l2.12 2.13l1.42-1.42L21.41 19l2.13-2.12z"></svg:path>`,
})
export class MdiAlertRemoveOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
