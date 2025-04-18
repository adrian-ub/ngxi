import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentPhoneShake20FilledIcon],svg[fluent-phone-shake-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.371 2.933a.5.5 0 1 1 .5-.866q.208.12.397.26a4.25 4.25 0 0 1 1.237 5.403a.5.5 0 0 1-.884-.467a3.25 3.25 0 0 0-1.25-4.33m-1 1.732a.5.5 0 1 1 .5-.866a2.25 2.25 0 0 1 .912 2.905a.5.5 0 0 1-.905-.426a1.25 1.25 0 0 0-.507-1.613M4.626 17.064a.5.5 0 1 1-.5.866a4.25 4.25 0 0 1-1.634-5.663a.5.5 0 1 1 .884.467a3.25 3.25 0 0 0 1.25 4.33m1-1.732a.5.5 0 1 1-.5.866a2.25 2.25 0 0 1-.912-2.905a.5.5 0 0 1 .905.426a1.25 1.25 0 0 0 .507 1.613m4.546-12.263a1.95 1.95 0 0 1 2.398 1.4l2.365 8.974c.283 1.07-.346 2.19-1.415 2.481L9.832 16.93a1.95 1.95 0 0 1-2.397-1.4L5.07 6.555c-.282-1.07.347-2.19 1.416-2.482zm-.488 11.308a.487.487 0 0 0 .603.354l1.782-.486a.513.513 0 0 0 .361-.616a.487.487 0 0 0-.603-.354l-1.781.485a.513.513 0 0 0-.362.617"></svg:path>`,
})
export class FluentPhoneShake20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
