import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsSubpoenaIcon],svg[hugeicons-subpoena-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M3 14v-4c0-3.771 0-5.657 1.172-6.828S7.229 2 11 2h2c3.771 0 5.657 0 6.828 1.172S21 6.229 21 10v4c0 3.771 0 5.657-1.172 6.828S16.771 22 13 22h-2c-3.771 0-5.657 0-6.828-1.172S3 17.771 3 14"></svg:path><svg:path d="m4.5 3l1.325 2.12c.574.919.862 1.379 1.314 1.63S8.133 7 9.217 7h5.566c1.084 0 1.626 0 2.078-.25c.452-.251.74-.711 1.314-1.63L19.5 3m-7.75 12.25c1.187 1.187 2.75 2.393 2.75 2.393l2.143-2.143s-1.206-1.563-2.393-2.75s-2.75-2.393-2.75-2.393L9.357 12.5s1.206 1.563 2.393 2.75m0 0L8 19m9-3.857L14.143 18m-2.286-8L9 12.857"></svg:path></svg:g>`,
})
export class HugeiconsSubpoenaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
