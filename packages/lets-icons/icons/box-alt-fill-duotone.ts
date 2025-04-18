import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsBoxAltFillDuotoneIcon],svg[lets-icons-box-alt-fill-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".25" d="M4 9.3c0-.141 0-.212.044-.256S4.159 9 4.3 9h15.4c.141 0 .212 0 .256.044S20 9.159 20 9.3V16c0 1.886 0 2.828-.586 3.414S17.886 20 16 20H8c-1.886 0-2.828 0-3.414-.586S4 17.886 4 16zM4.724 8c-.308 0-.462 0-.5-.093c-.039-.092.07-.201.288-.42l1.316-1.315c.578-.578.868-.868 1.235-1.02S7.84 5 8.657 5h6.686c.818 0 1.226 0 1.594.152c.367.152.656.442 1.235 1.02l1.316 1.316c.218.218.327.327.288.42c-.038.092-.192.092-.5.092z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" d="M9.5 12.5a2.5 2.5 0 0 0 5 0"></svg:path></svg:g>`,
})
export class LetsIconsBoxAltFillDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
