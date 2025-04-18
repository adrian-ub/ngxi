import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsRecRoomIcon],svg[arcticons-rec-room-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M29.837 24.942V12.144M18.03 24.942V12.144m22.86 16.241A28.7 28.7 0 0 1 24 33.881a28.7 28.7 0 0 1-16.89-5.494"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7.152 12.145v27.993a2.356 2.356 0 0 0 2.35 2.362h28.981a2.356 2.356 0 0 0 2.361-2.351V12.145zV7.862A2.356 2.356 0 0 1 9.503 5.5h28.98a2.356 2.356 0 0 1 2.361 2.351v4.294"></svg:path>`,
})
export class ArcticonsRecRoomIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
