import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconSwerveFilledIcon],svg[lsicon-swerve-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.5.5a7 7 0 1 0 0 14a7 7 0 0 0 0-14m1.271 5.479L9.793 7H5.5a.5.5 0 0 0-.5.5V11h1V8h3.793L8.77 9.021l.708.708l1.875-1.875a.5.5 0 0 0 0-.708L9.479 5.271z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconSwerveFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
