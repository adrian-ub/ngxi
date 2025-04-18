import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[eosIconsContainerOutlinedIcon],svg[eos-icons-container-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 10h-2l-4.79-3.5A1.85 1.85 0 0 0 14 5a2.03 2.03 0 0 0-1-1.721V2h-1v2a1 1 0 1 1-1 1h-1a1.85 1.85 0 0 0 .796 1.5L6 10H4a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h16a1.997 1.997 0 0 0 2-2v-8a2 2 0 0 0-2-2m-8-3c.006 0 4 3 4 3H8Zm8 13H4v-8h16Z"></svg:path><svg:path fill="currentColor" d="M14 19a1 1 0 0 0 1-1v-4a1 1 0 0 0-2 0v4a1 1 0 0 0 1 1m4 0a1 1 0 0 0 1-1v-4a1 1 0 0 0-2 0v4a1 1 0 0 0 1 1M6 19a1 1 0 0 0 1-1v-4a1 1 0 0 0-2 0v4a1 1 0 0 0 1 1m4 0a1 1 0 0 0 1-1v-4a1 1 0 0 0-2 0v4a1 1 0 0 0 1 1"></svg:path>`,
})
export class EosIconsContainerOutlinedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
