import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vscodeIconsFileTypeSbtIcon],svg[vscode-icons-file-type-sbt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="16" cy="16" r="14" fill="#0e3a51"></svg:circle><svg:path fill="#15a9ce" d="M12.64 15.72a1.625 1.625 0 0 0 1.624 1.624h15.668c.042-.444.068-.89.068-1.344a14 14 0 0 0-.144-1.9H14.264a1.625 1.625 0 0 0-1.624 1.62"></svg:path><svg:path fill="#92d13d" d="M17.624 8.795a1.624 1.624 0 1 0 0 3.248h11.8a14 14 0 0 0-1.437-3.248Z"></svg:path><svg:path fill="#de3423" d="M29.572 19.379H10.9a1.624 1.624 0 0 0 0 3.248h17.433a14 14 0 0 0 1.239-3.248"></svg:path>`,
})
export class VscodeIconsFileTypeSbtIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
