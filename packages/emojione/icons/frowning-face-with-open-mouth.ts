import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneFrowningFaceWithOpenMouthIcon],svg[emojione-frowning-face-with-open-mouth-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="32" cy="32" r="30" fill="#ffdd67"></svg:circle><svg:g fill="#664e27"><svg:circle cx="20.5" cy="26" r="5"></svg:circle><svg:circle cx="43.5" cy="26" r="5"></svg:circle><svg:path d="M45.7 44c-1.5-3.6-5.1-6-13.7-6s-12.2 2.4-13.7 6c-.8 1.9.3 4 .3 4c.4 1.2 2.2 2 13.4 2c11.1 0 12.9-.8 13.4-2c0 0 1.1-2.1.3-4"></svg:path></svg:g><svg:path fill="#fff" d="M42 43c.1-.3 0-.6-.2-.8c0 0-2.2-2.2-9.8-2.2c-7.5 0-9.8 2.2-9.8 2.2c-.2.1-.2.5-.2.8l.2.6c.1.3.3.5.6.5h18.4c.2 0 .5-.2.6-.5z"></svg:path>`,
})
export class EmojioneFrowningFaceWithOpenMouthIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
