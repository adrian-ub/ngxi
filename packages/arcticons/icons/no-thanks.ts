import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsNoThanksIcon],svg[arcticons-no-thanks-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M16.32 32.733L9.217 21.61v11.125H4.5V15.267h5.766l7.041 11.077V15.266h4.715v17.467zm23.152.019c2.438-1.49 4.028-5.005 4.028-8.904c0-3.635-1.384-6.96-3.58-8.6H28.196c-2.196 1.64-3.58 4.965-3.58 8.6c0 3.9 1.59 7.414 4.028 8.904z"></svg:path><svg:path d="M34.058 29.774c2.512 0 4.105-1.633 4.105-5.774s-1.593-5.774-4.105-5.774s-4.106 1.633-4.106 5.774s1.594 5.774 4.106 5.774"></svg:path></svg:g>`,
})
export class ArcticonsNoThanksIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
