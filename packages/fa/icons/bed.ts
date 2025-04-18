import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[faBedIcon],svg[fa-bed-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 768h1728q26 0 45 19t19 45v448h-256v-256H256v256H0V64q0-26 19-45T64 0h128q26 0 45 19t19 45zm576-320q0-106-75-181t-181-75t-181 75t-75 181t75 181t181 75t181-75t75-181m1216 256v-64q0-159-112.5-271.5T1664 256H960q-26 0-45 19t-19 45v384z"></svg:path>`,
})
export class FaBedIcon {
  readonly viewBox = input("0 0 2048 1280")
  readonly width = input("1.6em")
  readonly height = input("1em")
}
