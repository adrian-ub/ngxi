import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightRoomServiceOutlineRoundedIcon],svg[material-symbols-light-room-service-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.73 17.385q-.213 0-.356-.144q-.143-.143-.143-.356q0-.214.143-.357q.143-.144.357-.144h16.538q.214 0 .357.144q.143.143.143.357q0 .213-.143.356q-.143.144-.357.144zM4 15v-.23q0-2.95 2.01-5.103Q8.022 7.516 11 7.097v-.443q0-.402.299-.701q.299-.3.701-.3t.701.3t.299.7v.443q2.985.42 4.992 2.571T20 14.77V15zm1.07-1h13.86q-.234-2.446-2.247-4.204T12 8.04T7.32 9.796T5.07 14M12 14"></svg:path>`,
})
export class MaterialSymbolsLightRoomServiceOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
