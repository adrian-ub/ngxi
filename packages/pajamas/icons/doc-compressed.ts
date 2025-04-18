import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pajamasDocCompressedIcon],svg[pajamas-doc-compressed-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12.5 14.5V6H9.75A1.75 1.75 0 0 1 8 4.25V1.5H3.5v13H5V13h2v1.5zM7 11h2v2H7zm0 0V9h2V7H7V5H5v2h2v2H5v2zm2.5-9.379L12.379 4.5H9.75a.25.25 0 0 1-.25-.25zM3 0a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V4.414a1 1 0 0 0-.293-.707L10.293.293A1 1 0 0 0 9.586 0z" clip-rule="evenodd"></svg:path>`,
})
export class PajamasDocCompressedIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
