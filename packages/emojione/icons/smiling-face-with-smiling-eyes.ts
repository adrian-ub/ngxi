import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneSmilingFaceWithSmilingEyesIcon],svg[emojione-smiling-face-with-smiling-eyes-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="32" cy="32" r="30" fill="#ffdd67"></svg:circle><svg:g fill="#ff717f"><svg:circle cx="50.8" cy="36" r="8" opacity=".8"></svg:circle><svg:circle cx="13.2" cy="36" r="8" opacity=".8"></svg:circle></svg:g><svg:path fill="#664e27" d="M44.6 40.3c-8.1 5.7-17.1 5.6-25.2 0c-1-.7-1.8.5-1.2 1.6c2.5 4 7.4 7.7 13.8 7.7s11.3-3.6 13.8-7.7c.6-1.1-.2-2.3-1.2-1.6M28.5 26.9c-1.9-5.1-4.7-7.7-7.5-7.7s-5.6 2.6-7.5 7.7c-.2.5.8 1.4 1.3.9c1.8-1.9 4-2.7 6.2-2.7s4.4.8 6.2 2.7c.6.5 1.5-.4 1.3-.9m21.9 0c-1.9-5.1-4.7-7.7-7.5-7.7s-5.6 2.6-7.5 7.7c-.2.5.8 1.4 1.3.9c1.8-1.9 4-2.7 6.2-2.7s4.4.8 6.2 2.7c.5.5 1.5-.4 1.3-.9"></svg:path>`,
})
export class EmojioneSmilingFaceWithSmilingEyesIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
