import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneSmilingFaceIcon],svg[emojione-smiling-face-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="32" cy="32" r="30" fill="#ffdd67"></svg:circle><svg:g fill="#664e27"><svg:circle cx="20.5" cy="24.6" r="5"></svg:circle><svg:circle cx="43.5" cy="24.6" r="5"></svg:circle><svg:path d="M48.1 37c-4.3 6.1-9.5 7.6-16.1 7.6S20.2 43.1 15.9 37c-.6-.8-2.2-.3-1.8.9c2.3 8 10 12.7 18 12.7s15.7-4.7 18-12.7c.2-1.2-1.4-1.7-2-.9"></svg:path></svg:g>`,
})
export class EmojioneSmilingFaceIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
