import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiOfficeBuildingIcon],svg[openmoji-office-building-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"><svg:path fill="#D0CFCE" d="M8.5 19h55v35h-55z"></svg:path><svg:path fill="#92D3F5" d="M29.5 44h13v10h-13z"></svg:path><svg:path fill="none" stroke="#92D3F5" d="M22 44h2v5h-2zm-8 0h2v5h-2zm8-10h2v5h-2zm-8 0h2v5h-2zm8-10h2v5h-2zm-8 0h2v5h-2zm25 10h2v5h-2zm-8 0h2v5h-2zm8-10h2v5h-2zm-8 0h2v5h-2zm25 20h2v5h-2zm-8 0h2v5h-2zm8-10h2v5h-2zm-8 0h2v5h-2zm8-10h2v5h-2zm-8 0h2v5h-2z"></svg:path></svg:g><svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"><svg:path d="M8.5 19h55v35h-55z"></svg:path><svg:path d="M29.5 44h13v10h-13zM36 54V44M16 29h-2v-5m10 25h-2v-5m-6 5h-2v-5m10-5h-2v-5m-6 5h-2v-5m10-5h-2v-5m19 15h-2v-5m-6 5h-2v-5m10-5h-2v-5m-6 5h-2v-5m27 25h-2v-5m-6 5h-2v-5m10-5h-2v-5m-6 5h-2v-5m10-5h-2v-5m-6 5h-2v-5"></svg:path></svg:g>`,
})
export class OpenmojiOfficeBuildingIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
