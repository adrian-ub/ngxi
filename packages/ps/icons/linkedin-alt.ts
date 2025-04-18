import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[psLinkedinAltIcon],svg[ps-linkedin-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M434 5H41q-14 0-24 9.5T7 38v394q0 14 10 24t24 10h393q14 0 24-10t10-24V38q0-14-10-23.5T434 5M147 390H77V182h70zm-35-236q-18 0-28.5-10.5T73 118t11-25.5T112 82q18 0 28.5 10.5T151 118t-10.5 25.5T112 154m286 236h-70V279q0-47-35-47q-26 0-36 25q-2 5-2 17v116h-70q1-188 0-208h70v30q23-35 63-35q36 0 58 24t22 70zM255 213v-1z"></svg:path>`,
})
export class PsLinkedinAltIcon {
  readonly viewBox = input("0 0 472 488")
  readonly width = input("0.97em")
  readonly height = input("1em")
}
