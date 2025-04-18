import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vscodeIconsFileTypeFlutterIcon],svg[vscode-icons-file-type-flutter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#40d0fd" d="m15.383 18.316l3.361-3.274h8.349l-7.396 7.396z"></svg:path><svg:path fill="#41d0fd" d="m4.907 16.125l4.199 4.299L27.093 2.287h-8.349z"></svg:path><svg:path fill="#1fbcfd" d="m11.176 22.479l4.259 4.196l4.262-4.237l-4.314-4.122z"></svg:path><svg:path fill="#095a9d" d="m15.435 26.675l4.262-4.237l7.292 7.375h-8.396z"></svg:path><svg:path fill="#0e5199" d="m15.435 26.675l3.971-1.321l-1.338-1.297z"></svg:path>`,
})
export class VscodeIconsFileTypeFlutterIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
