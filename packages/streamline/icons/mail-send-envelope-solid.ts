import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineMailSendEnvelopeSolidIcon],svg[streamline-mail-send-envelope-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M0 2.75a1.5 1.5 0 0 1 1.5-1.5h11a1.5 1.5 0 0 1 1.5 1.5v.342L7.383 7.504A.7.7 0 0 1 7 7.607a.7.7 0 0 1-.383-.103L0 3.092zm0 1.844v6.656a1.5 1.5 0 0 0 1.5 1.5h11a1.5 1.5 0 0 0 1.5-1.5V4.594L8.073 8.546l-.005.004A1.97 1.97 0 0 1 7 8.857c-.375 0-.753-.102-1.068-.307l-.005-.004z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineMailSendEnvelopeSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
