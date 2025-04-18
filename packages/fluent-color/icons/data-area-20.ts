import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorDataArea20Icon],svg[fluent-color-data-area-20-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorDataArea200)" d="M16 17V5.5a.5.5 0 0 0-.812-.39l-4.735 3.787l-3.205-1.831a.5.5 0 0 0-.451-.023L3 8.731V17z"></svg:path><svg:path fill="url(#fluentColorDataArea204)" fill-opacity=".3" d="M16 17V5.5a.5.5 0 0 0-.812-.39l-4.735 3.787l-3.205-1.831a.5.5 0 0 0-.451-.023L3 8.731V17z"></svg:path><svg:path fill="url(#fluentColorDataArea201)" fill-opacity=".3" d="M16 17V5.5a.5.5 0 0 0-.812-.39l-4.735 3.787l-3.205-1.831a.5.5 0 0 0-.451-.023L3 8.731V17z"></svg:path><svg:path fill="url(#fluentColorDataArea202)" fill-opacity=".3" d="M16 17V5.5a.5.5 0 0 0-.812-.39l-4.735 3.787l-3.205-1.831a.5.5 0 0 0-.451-.023L3 8.731V17z"></svg:path><svg:path fill="url(#fluentColorDataArea203)" d="M2.75 2a.75.75 0 0 1 .75.75v12.5c0 .69.56 1.25 1.25 1.25h12.5a.75.75 0 0 1 0 1.5H4.75A2.75 2.75 0 0 1 2 15.25V2.75A.75.75 0 0 1 2.75 2"></svg:path><svg:defs><svg:lineargradient id="fluentColorDataArea200" x1="-1.5" x2="20" y1="6.5" y2="19" gradientUnits="userSpaceOnUse"><svg:stop offset=".164" stop-color="#3BD5FF"></svg:stop><svg:stop offset=".537" stop-color="#9C6CFE"></svg:stop><svg:stop offset=".908" stop-color="#E656EB"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorDataArea201" x1="9.5" x2="9.5" y1="15" y2="17" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#163697" stop-opacity="0"></svg:stop><svg:stop offset="1" stop-color="#163697"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorDataArea202" x1="5" x2="3" y1="13.5" y2="13.5" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#163697" stop-opacity="0"></svg:stop><svg:stop offset="1" stop-color="#163697"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorDataArea203" x1="16.5" x2="2.498" y1="3" y2="23.849" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#70777D"></svg:stop><svg:stop offset="1" stop-color="#B9C0C7"></svg:stop></svg:lineargradient><svg:radialgradient id="fluentColorDataArea204" cx="0" cy="0" r="1" gradientTransform="matrix(-10.00002 8.99995 -9.1043 -10.11597 14 7)" gradientUnits="userSpaceOnUse"><svg:stop offset=".636" stop-color="#0FAFFF" stop-opacity="0"></svg:stop><svg:stop offset=".962" stop-color="#0067BF"></svg:stop></svg:radialgradient></svg:defs></svg:g>`,
})
export class FluentColorDataArea20Icon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
