import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsOmgIcon],svg[arcticons-omg-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:ellipse cx="14.75" cy="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="9.25" ry="18.5"></svg:ellipse><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M14.763 24c0-2.268 1.702-4.107 3.863-4.296c-.898-5.337-3.414-9.186-6.385-9.186C8.518 10.519 5.5 16.554 5.5 24s3.018 13.48 6.74 13.48c2.972 0 5.488-3.849 6.386-9.186c-2.16-.188-3.863-2.028-3.863-4.295Z"></svg:path><svg:ellipse cx="33.25" cy="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="9.25" ry="18.5"></svg:ellipse><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M33.263 24c0-2.268 1.702-4.107 3.863-4.296c-.898-5.337-3.414-9.186-6.385-9.186C27.018 10.519 24 16.554 24 24s3.018 13.481 6.74 13.481c2.971 0 5.488-3.849 6.386-9.186c-2.16-.188-3.863-2.028-3.863-4.295"></svg:path>`,
})
export class ArcticonsOmgIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
