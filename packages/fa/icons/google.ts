import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[faGoogleIcon],svg[fa-google-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M768 658h725q12 67 12 128q0 217-91 387.5T1154.5 1440T768 1536q-157 0-299-60.5T224 1312T60.5 1067T0 768t60.5-299T224 224T469 60.5T768 0q300 0 515 201l-209 201Q951 283 768 283q-129 0-238.5 65T356 524.5T292 768t64 243.5T529.5 1188t238.5 65q87 0 160-24t120-60t82-82t51.5-87t22.5-78H768z"></svg:path>`,
})
export class FaGoogleIcon {
  readonly viewBox = input("0 0 1536 1536")
  readonly width = input("1em")
  readonly height = input("1em")
}
