import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[logosNuodbIcon],svg[logos-nuodb-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M225.828 8.069l-13.283.79l-29.57 80.032l-35.22-41.22l-13.935-3.477L62.471 0l13.843 45.046l.036.205l-36.514-5.127l40.425 77.81l38.36 25.166L0 178.65l164.053-19.231l-.043-28.359l5.613-1.644l41.353-12.088l12.105-90.103L256 48.659l-30.172-40.59" fill="#B5D118"></svg:path>`,
})
export class LogosNuodbIcon {
  readonly viewBox = input("0 0 256 179")
  readonly width = input("1.44em")
  readonly height = input("1em")
}
