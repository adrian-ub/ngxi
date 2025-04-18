import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiTextBoxRemoveOutlineIcon],svg[mdi-text-box-remove-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m14.46 15.88l1.42-1.42L18 16.59l2.12-2.13l1.42 1.42L19.41 18l2.13 2.12l-1.42 1.42L18 19.41l-2.12 2.13l-1.42-1.42L16.59 18zM5 3h14c1.11 0 2 .89 2 2v7.8c-.61-.35-1.28-.6-2-.72V5H5v14h7.08c.12.72.37 1.39.72 2H5c-1.11 0-2-.89-2-2V5c0-1.11.89-2 2-2m2 4h10v2H7zm0 4h10v1.08c-.85.14-1.63.46-2.32.92H7zm0 4h5v2H7z"></svg:path>`,
})
export class MdiTextBoxRemoveOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
