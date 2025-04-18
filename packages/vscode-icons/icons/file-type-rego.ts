import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vscodeIconsFileTypeRegoIcon],svg[vscode-icons-file-type-rego-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:clippath id="vscodeIconsFileTypeRego0"><svg:use href="#vscodeIconsFileTypeRego1"></svg:use></svg:clippath><svg:path id="vscodeIconsFileTypeRego1" fill="none" d="M7.055 16.241c3.415-10.22 14.759-9.473 17.924 0l.1 5.893a15.56 15.56 0 0 0-9.036 7.246a17.64 17.64 0 0 0-9.013-7.034Z"></svg:path></svg:defs><svg:path fill="#bfbfbf" fill-rule="evenodd" d="m7.03 16.241l2.6-4.559c-2.418-.312-2.606-3.431-.8-9.062c-5.021 6.233-6.41 7.608-1.8 13.621m17.94 0l-2.595-4.559c2.418-.312 2.606-3.431.8-9.062c5.016 6.233 6.405 7.608 1.795 13.621"></svg:path><svg:use href="#vscodeIconsFileTypeRego1"></svg:use><svg:g clip-path="url(#vscodeIconsFileTypeRego0)"><svg:path fill="#536367" d="M16.053 7.962h9.549v21.899h-9.549z"></svg:path><svg:path fill="#78929a" d="M5.322 7.962h10.732v21.899H5.322z"></svg:path></svg:g><svg:circle cx="16.04" cy="16.241" r="1.166" fill="#fff"></svg:circle>`,
})
export class VscodeIconsFileTypeRegoIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
