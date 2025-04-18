import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[simpleLineIconsExclamationIcon],svg[simple-line-icons-exclamation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M480 674V192c0-18 14-32 32-32s32 14 32 32v482zm0 63h64v60h-64zM0 512C0 229 229 0 512 0s512 229 512 512s-229 512-512 512S0 795 0 512m961 0c0-247-202-448-449-448S64 265 64 512s201 448 448 448s449-201 449-448"></svg:path>`,
})
export class SimpleLineIconsExclamationIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}
