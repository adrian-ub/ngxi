import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[eosIconsTemplatesIcon],svg[eos-icons-templates-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 2H5a2.005 2.005 0 0 0-2 2v16a2.005 2.005 0 0 0 2 2h14a2.005 2.005 0 0 0 2-2V4a2.005 2.005 0 0 0-2-2m0 11.152v5.696L14 16Zm-7 1.694L7 12h10ZM5 4h14v2H5Zm0 4h8v2H5Zm5 8l-5 2.848v-5.704Zm2 1.15L17 20H7Z"></svg:path>`,
})
export class EosIconsTemplatesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
