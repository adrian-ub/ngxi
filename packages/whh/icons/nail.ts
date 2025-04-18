import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhNailIcon],svg[whh-nail-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1021 1021q-16 16-113.5-53T776 865L249 338Q20 393 10 382q-10-9-10-22.5T10 336L336 10q10-10 23.5-10T382 10q11 10-44 239l527 527q34 34 103 131.5t53 113.5"></svg:path>`,
})
export class WhhNailIcon {
  readonly viewBox = input("0 0 1025 1025")
  readonly width = input("1em")
  readonly height = input("1em")
}
