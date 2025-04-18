import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vscodeIconsFileTypeAppscriptIcon],svg[vscode-icons-file-type-appscript-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="373" height="107" x="27.53" y="328.9" fill="#ea4335" rx="53.5"></svg:rect><svg:circle cx="81.36" cy="382.6" r="26.7" fill="#fff"></svg:circle><svg:rect width="373" height="107" x="53.33" y="250.94" fill="#fbbc04" rx="53.5" transform="rotate(-144 239.832 304.447)"></svg:rect><svg:circle cx="131.44" cy="225.44" r="26.7" fill="#fff"></svg:circle><svg:rect width="373" height="107" x="120.53" y="201.9" fill="#34a853" rx="53.5" transform="rotate(72 307.032 255.396)"></svg:rect><svg:circle cx="265.84" cy="129.28" r="26.7" fill="#fff"></svg:circle><svg:rect width="373" height="107" x="202.53" y="201.9" fill="#4285f4" rx="53.5" transform="rotate(-72 389.029 255.392)"></svg:rect><svg:circle cx="348.22" cy="381.64" r="26.7" fill="#fff"></svg:circle><svg:circle cx="430.67" cy="127.89" r="26.7" fill="#fff"></svg:circle>`,
})
export class VscodeIconsFileTypeAppscriptIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
