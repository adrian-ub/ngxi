import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riProfileFillIcon],svg[ri-profile-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 3.993A1 1 0 0 1 2.992 3h18.016c.548 0 .992.445.992.993v16.014a1 1 0 0 1-.992.993H2.992A.993.993 0 0 1 2 20.007zM6 15v2h12v-2zm0-8v6h6V7zm8 0v2h4V7zm0 4v2h4v-2zM8 9h2v2H8z"></svg:path>`,
})
export class RiProfileFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
