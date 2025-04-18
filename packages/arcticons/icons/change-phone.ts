import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsChangePhoneIcon],svg[arcticons-change-phone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M27.37 33.558v6.972a2.965 2.965 0 0 1-2.973 2.97H11.488a2.965 2.965 0 0 1-2.973-2.97V14.232a2.965 2.965 0 0 1 2.973-2.97h12.91a2.965 2.965 0 0 1 2.973 2.97v6.974"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M20.83 11.166V7.47a2.965 2.965 0 0 1 2.973-2.97h12.709a2.965 2.965 0 0 1 2.973 2.97v26.298a2.965 2.965 0 0 1-2.973 2.97h-9.046m-4.905-3.454l-6.202-6.02l6.202-6.018"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M16.369 27.274c9.037.536 17.56.542 18.803-10.362"></svg:path>`,
})
export class ArcticonsChangePhoneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
