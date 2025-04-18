import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhSpeakerIcon],svg[whh-speaker-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M704 1024H64q-26 0-45-19T0 960V64q0-26 18.5-45T64 0h640q27 0 45.5 18.5T768 64v896q0 27-19 45.5t-45 18.5M384 64q-53 0-90.5 37.5T256 192t37.5 90.5T384 320t90.5-37.5T512 192t-37.5-90.5T384 64m0 384q-106 0-181 75t-75 181t75 181t181 75t181-75t75-181t-75-181t-181-75m0 384q-53 0-90.5-37.5T256 704t37.5-90.5T384 576t90.5 37.5T512 704t-37.5 90.5T384 832m0-576q-26 0-45-18.5t-19-45t19-45.5t45.5-19t45 19t18.5 45.5t-19 45t-45 18.5"></svg:path>`,
})
export class WhhSpeakerIcon {
  readonly viewBox = input("0 0 768 1024")
  readonly width = input("0.75em")
  readonly height = input("1em")
}
