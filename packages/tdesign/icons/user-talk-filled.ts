import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignUserTalkFilledIcon],svg[tdesign-user-talk-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.5 2a5.5 5.5 0 1 0 0 11a5.5 5.5 0 0 0 0-11m7.484 10.982l.602.798a7 7 0 0 1-.003 8.441l-.603.797l-1.595-1.206l.603-.797a5 5 0 0 0 .002-6.03l-.602-.798z"></svg:path><svg:path fill="currentColor" d="m16.19 15.091l.604.798a3.5 3.5 0 0 1-.002 4.22l-.603.798l-1.595-1.206l.603-.798a1.5 1.5 0 0 0 0-1.809l-.602-.798zM12.876 14a6.47 6.47 0 0 0-1.376 4c0 1.509.514 2.897 1.376 4H2v-2a6 6 0 0 1 6-6z"></svg:path>`,
})
export class TdesignUserTalkFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
