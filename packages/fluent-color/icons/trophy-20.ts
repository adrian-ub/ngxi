import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorTrophy20Icon],svg[fluent-color-trophy-20-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorTrophy200)" fill-rule="evenodd" d="M9.5 15.5V13h1v2.5z" clip-rule="evenodd"></svg:path><svg:path fill="url(#fluentColorTrophy201)" d="M7.5 15a2 2 0 0 0-2 2v.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5V17a2 2 0 0 0-2-2z"></svg:path><svg:path fill="url(#fluentColorTrophy202)" fill-rule="evenodd" d="M3 5.5A1.5 1.5 0 0 1 4.5 4h3A1.5 1.5 0 0 1 9 5.5V7a3 3 0 0 1-6 0zM4.5 5a.5.5 0 0 0-.5.5V7a2 2 0 1 0 4 0V5.5a.5.5 0 0 0-.5-.5z" clip-rule="evenodd"></svg:path><svg:path fill="url(#fluentColorTrophy203)" fill-rule="evenodd" d="M11 5.5A1.5 1.5 0 0 1 12.5 4h3A1.5 1.5 0 0 1 17 5.5V7a3 3 0 1 1-6 0zm1.5-.5a.5.5 0 0 0-.5.5V7a2 2 0 1 0 4 0V5.5a.5.5 0 0 0-.5-.5z" clip-rule="evenodd"></svg:path><svg:path fill="url(#fluentColorTrophy204)" d="M7.5 2a2 2 0 0 0-2 2v5a4.5 4.5 0 1 0 9 0V4a2 2 0 0 0-2-2z"></svg:path><svg:defs><svg:lineargradient id="fluentColorTrophy200" x1="9" x2="13" y1="12.5" y2="18" gradientUnits="userSpaceOnUse"><svg:stop offset=".174" stop-color="#EB4824"></svg:stop><svg:stop offset=".563" stop-color="#FF921F" stop-opacity=".988"></svg:stop><svg:stop offset=".853" stop-color="#EB4824"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorTrophy201" x1="31" x2="26.908" y1="27" y2="10.068" gradientUnits="userSpaceOnUse"><svg:stop offset=".184" stop-color="#FFCD0F"></svg:stop><svg:stop offset="1" stop-color="#FF6F47"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorTrophy202" x1="7.5" x2="1.5" y1="6.5" y2="6.5" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#EB4824"></svg:stop><svg:stop offset="1" stop-color="#FFCD0F" stop-opacity=".988"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorTrophy203" x1="13" x2="18.5" y1="6.5" y2="6.5" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#EB4824"></svg:stop><svg:stop offset="1" stop-color="#FFCD0F" stop-opacity=".988"></svg:stop></svg:lineargradient><svg:radialgradient id="fluentColorTrophy204" cx="0" cy="0" r="1" gradientTransform="rotate(-130.365 10.256 3.147)scale(13.1244 13.98)" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#FF6F47"></svg:stop><svg:stop offset="1" stop-color="#FFCD0F"></svg:stop></svg:radialgradient></svg:defs></svg:g>`,
})
export class FluentColorTrophy20Icon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
