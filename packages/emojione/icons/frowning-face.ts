import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneFrowningFaceIcon],svg[emojione-frowning-face-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="32" cy="32" r="30" fill="#ffdd67"></svg:circle><svg:g fill="#664e27"><svg:circle cx="20.5" cy="24.6" r="5"></svg:circle><svg:circle cx="43.5" cy="24.6" r="5"></svg:circle><svg:path d="M19.4 45.8c8.1-5.7 17.1-5.6 25.2 0c1 .7 1.8-.5 1.2-1.6c-2.5-4-7.4-7.7-13.8-7.7s-11.3 3.6-13.8 7.7c-.6 1.1.2 2.3 1.2 1.6"></svg:path></svg:g>`,
})
export class EmojioneFrowningFaceIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
