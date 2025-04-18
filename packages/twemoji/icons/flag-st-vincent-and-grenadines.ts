import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[twemojiFlagStVincentAndGrenadinesIcon],svg[twemoji-flag-st-vincent-and-grenadines-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#009E60" d="M32 5h-5v26h5a4 4 0 0 0 4-4V9a4 4 0 0 0-4-4"></svg:path><svg:path fill="#0072C6" d="M4 5a4 4 0 0 0-4 4v18a4 4 0 0 0 4 4h5V5z"></svg:path><svg:path fill="#FCD116" d="M9 5h18v26H9z"></svg:path><svg:path fill="#009E60" d="M15.833 23.526L18 27.859l2.167-4.333L18 19.193zm-2.708-5.417l2.167 4.333l2.167-4.333l-2.167-4.333zm5.417 0l2.167 4.333l2.167-4.333l-2.167-4.333z"></svg:path>`,
})
export class TwemojiFlagStVincentAndGrenadinesIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
