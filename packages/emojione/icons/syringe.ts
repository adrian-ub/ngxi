import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneSyringeIcon],svg[emojione-syringe-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#ed4c5c" d="M59.7 25.5c0 9.8-7.1 9.8-7.1 0c0-5.8 3.5-10.5 3.5-10.5s3.6 4.7 3.6 10.5m-5.2 17.7c0 7.5-7.1 7.5-7.1 0c0-4.4 3.5-8 3.5-8s3.6 3.6 3.6 8"></svg:path><svg:path fill="#d0d0d0" d="M21.1 55.5L9.5 43.7l25.9-26.2L47 29.3z"></svg:path><svg:path fill="#ed4c5c" d="m30.2 43.7l14.2-14.4l-9-9.2l-14.3 14.4z"></svg:path><svg:path fill="#333" d="m27.6 46.3l2.6-2.6l-9.1-9.2l-2.6 2.6z"></svg:path><svg:path fill="#bcc0c1" d="m43.8 26l2.6-2.6l-5.2-5.3l-2.6 2.6z"></svg:path><svg:g fill="#42ade2"><svg:path d="m14.7 62l1.2-1.3L4.3 48.9L3 50.2z"></svg:path><svg:path d="m12.7 57.4l5.2-5.2l-5.2-5.3l-5.2 5.3z"></svg:path></svg:g><svg:path fill="#fff" d="m45.1 19.4l-.3-.3z"></svg:path><svg:path fill="#bcc0c1" d="m43.1 20.1l.4.3l.3.4l.6.6L59.7 6l.7-2l.3-1l.3-1z"></svg:path>`,
})
export class EmojioneSyringeIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
