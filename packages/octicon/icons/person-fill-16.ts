import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[octiconPersonFill16Icon],svg[octicon-person-fill-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.243 4.757a3.757 3.757 0 1 1 5.851 3.119a6.01 6.01 0 0 1 3.9 5.339a.75.75 0 0 1-.715.784H2.721a.75.75 0 0 1-.714-.784a6.01 6.01 0 0 1 3.9-5.34a3.75 3.75 0 0 1-1.664-3.118"></svg:path>`,
})
export class OcticonPersonFill16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
