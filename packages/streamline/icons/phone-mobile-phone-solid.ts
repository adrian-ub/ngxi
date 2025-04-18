import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlinePhoneMobilePhoneSolidIcon],svg[streamline-phone-mobile-phone-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.5 1.75a.25.25 0 0 1 .25-.25h6.5a.25.25 0 0 1 .25.25v10.5a.25.25 0 0 1-.25.25H3.802a.8.8 0 0 1-.179-.114a.5.5 0 0 1-.123-.147zM3.75 0A1.75 1.75 0 0 0 2 1.75v10.5c0 .592.361 1.032.65 1.278c.156.133.328.243.498.322c.154.073.37.15.602.15h6.5A1.75 1.75 0 0 0 12 12.25V1.75A1.75 1.75 0 0 0 10.25 0zM6.5 9.75a.75.75 0 0 0 0 1.5h1a.75.75 0 0 0 0-1.5z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlinePhoneMobilePhoneSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
