import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojionePerseveringFaceIcon],svg[emojione-persevering-face-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="32" cy="32" r="30" fill="#ffdd67"></svg:circle><svg:g fill="#ff717f"><svg:ellipse cx="52.5" cy="31.3" opacity=".8" rx="6.5" ry="9" transform="rotate(-65.001 52.5 31.313)"></svg:ellipse><svg:ellipse cx="11.5" cy="31.3" opacity=".8" rx="9" ry="6.5" transform="rotate(-25.001 11.5 31.311)"></svg:ellipse></svg:g><svg:path fill="#664e27" d="M19.4 42.2c8.1-5.7 17.1-5.6 25.2 0c1 .7 1.8-.5 1.2-1.6c-2.5-4-7.4-7.7-13.8-7.7s-11.3 3.6-13.8 7.7c-.6 1.1.2 2.3 1.2 1.6m32.3-27.1c.6.3.3 1-.2 1.1c-2.7.4-5.5.9-8.3 2.4c4 .7 7.2 2.7 9 4.8c.4.5-.1 1.1-.5 1c-4.8-1.7-9.7-2.7-15.8-2c-.5 0-.9-.2-.8-.7c1.6-7.3 10.9-10 16.6-6.6m-39.4 0c-.6.3-.3 1 .2 1.1c2.7.4 5.5.9 8.3 2.4c-4 .7-7.2 2.7-9 4.8c-.4.5.1 1.1.5 1c4.8-1.7 9.7-2.7 15.8-2c.5 0 .9-.2.8-.7c-1.6-7.3-10.9-10-16.6-6.6"></svg:path>`,
})
export class EmojionePerseveringFaceIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
