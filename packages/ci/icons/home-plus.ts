import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ciHomePlusIcon],svg[ci-home-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 20H5a1 1 0 0 1-1-1v-7.86a1 1 0 0 1 .281-.695l5.5-5.7a1 1 0 0 1 1.439 0l1.651 1.713l-1.433 1.394l-.938-.972L6 11.54v6.455h11v1A1 1 0 0 1 16 20Zm1-4h-2v-3h-3v-2h3V8h2v3h3v2h-3v3Z"></svg:path>`,
})
export class CiHomePlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
