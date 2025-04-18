import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhCloudaltsyncIcon],svg[whh-cloudaltsync-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M768 768H224q-93 0-158.5-65.5T0 544q0-84 55-147t137-74v-3q0-87 43-160.5T351.5 43T512 0q100 0 180.5 56T809 202q94 24 154.5 101.5T1024 480q0 111-74 193.5T768 768M320 576l29-29q26 42 69 67.5t94 25.5q80 0 136-56l-45-46q-38 38-91 38q-38 0-69.5-21T396 500l52-52H320zm384-256l-29 29q-26-43-69-68t-94-25q-79 0-136 56l45 45q38-37 91-37q38 0 69.5 21t46.5 55l-52 52h128z"></svg:path>`,
})
export class WhhCloudaltsyncIcon {
  readonly viewBox = input("0 0 1024 768")
  readonly width = input("1.34em")
  readonly height = input("1em")
}
