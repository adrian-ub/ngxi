import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsMyDiaryIcon],svg[arcticons-my-diary-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M16.707 12.362h19.88a2.553 2.553 0 0 1 2.56 2.56V40.94a2.553 2.553 0 0 1-2.56 2.559h-19.88a2.553 2.553 0 0 1-2.56-2.559V14.92a2.553 2.553 0 0 1 2.56-2.56z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M14.147 35.916H10.9a2.043 2.043 0 0 1-2.047-2.047V10.905c0-1.133.913-2.046 2.047-2.046h17.602c1.134 0 2.047.913 2.047 2.046v1.457"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m13.878 8.859l.157-2.442a2.04 2.04 0 0 1 2.174-1.912h0l17.457 1.123a2.043 2.043 0 0 1 1.912 2.174l-.293 4.561M21.438 24.68h10.418m-10.418 2.277h10.418"></svg:path>`,
})
export class ArcticonsMyDiaryIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
