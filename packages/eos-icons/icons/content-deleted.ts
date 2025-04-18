import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[eosIconsContentDeletedIcon],svg[eos-icons-content-deleted-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 19H5V5h6V3H5a2.006 2.006 0 0 0-2 2v14a2.006 2.006 0 0 0 2 2h14a2.006 2.006 0 0 0 2-2v-4h-2Z"></svg:path><svg:path fill="currentColor" d="M15 5h6v6a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1zm7-2h-2l-.571-1h-2.858L16 3h-2v1h8z"></svg:path>`,
})
export class EosIconsContentDeletedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
