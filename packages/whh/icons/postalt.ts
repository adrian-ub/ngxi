import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhPostaltIcon],svg[whh-postalt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M855.048 768h-87l-256 256V768h-343q-57 0-113-57t-56-115V172q0-58 56-115t113-57h686q57 0 113 57t56 115v424q0 58-56 115t-113 57m-87-576h-512q-27 0-45.5 19t-18.5 45.5t18.5 45t45.5 18.5h512q26 0 45-18.5t19-45t-19-45.5t-45-19m0 256h-512q-27 0-45.5 19t-18.5 45.5t18.5 45t45.5 18.5h512q26 0 45-18.5t19-45t-19-45.5t-45-19"></svg:path>`,
})
export class WhhPostaltIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}
