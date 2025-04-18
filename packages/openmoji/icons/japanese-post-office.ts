import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiJapanesePostOfficeIcon],svg[openmoji-japanese-post-office-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M17 17h18v4H17zm0 6h18v4H17z"></svg:path><svg:path d="M24 25h4v9h-4z"></svg:path><svg:path fill="#D0CFCE" d="M12.5 12h27v48h-27zm27 13h19v35h-19z"></svg:path><svg:path fill="#92D3F5" stroke="#92D3F5" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="M17 40h2v5h-2zm8 0h2v5h-2zm8 0h2v5h-2zm11-10h2v5h-2zm8 0h2v5h-2zm-8 10h2v5h-2zm8 0h2v5h-2zm-8 10h2v5h-2zm8 0h2v5h-2z"></svg:path><svg:path fill="#92D3F5" d="M19.5 50h13v10h-13z"></svg:path><svg:path fill="#D22F27" d="M17 17h18v4H17zm0 6h18v4H17z"></svg:path><svg:path fill="#D22F27" d="M24 25h4v9h-4z"></svg:path><svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"><svg:path d="M12.5 12h27v48h-27zm27 13h19v35h-19z"></svg:path><svg:path d="M19.5 50h13v10h-13zM26 60V50m28-15h-2v-5m2 15h-2v-5m2 15h-2v-5m-6-15h-2v-5M27 45h-2v-5m10 5h-2v-5m-14 5h-2v-5m29 5h-2v-5m2 15h-2v-5"></svg:path></svg:g>`,
})
export class OpenmojiJapanesePostOfficeIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
