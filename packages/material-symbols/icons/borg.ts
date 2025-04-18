import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsBorgIcon],svg[material-symbols-borg-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 21.725L4 17.7q-.475-.275-.737-.737T3 15.95V13h5v3h3zM3 11V8.05q0-.55.263-1.012T4 6.3l7-4.025V8H8v3zm7 3v-4h4v4zm3 7.725V16h3v-3h5v2.95q0 .55-.262 1.013T20 17.7zM16 11V8h-3V2.275L20 6.3q.475.275.738.738T21 8.05V11z"></svg:path>`,
})
export class MaterialSymbolsBorgIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
