import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiCampingIcon],svg[openmoji-camping-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#FCEA2B" stroke="#FCEA2B" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="M27 35L12.5 60h29z"></svg:path><svg:path fill="#F1B31C" stroke="#F1B31C" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="M27 35v25H12.5z"></svg:path><svg:path fill="#B1CC33" d="M66.5 32.616c0-3.544-3.64-6.422-8.132-6.422q-.563.005-1.123.07C55.343 22.569 51.214 20 46.412 20c-6.604 0-11.957 4.845-11.957 10.821q.002.593.074 1.182c-2.952.963-5.029 3.256-5.029 5.935c0 3.544 3.64 6.422 8.132 6.422a9.57 9.57 0 0 0 4.876-1.292c1.922 1.58 4.996 2.61 8.472 2.61c5.825 0 10.546-2.876 10.546-6.423a4 4 0 0 0-.064-.699c2.956-.964 5.038-3.259 5.038-5.94"></svg:path><svg:path fill="#8967AA" d="M27 54c-1 0-3 1-5 1a5 5 0 0 0-5 5h10z"></svg:path><svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-width="2"><svg:path stroke-linejoin="round" d="M46.94 60v-7.675l-5.285-5.164m5.857 5.057l3.006-3.168"></svg:path><svg:path stroke-linejoin="round" stroke-miterlimit="10" d="M27 35L12.5 60h29l-6.934-11.956M27 60V44.25m0 0V60"></svg:path><svg:path stroke-miterlimit="10" d="M66.5 32.616c0-3.544-3.64-6.422-8.132-6.422q-.563.005-1.123.07C55.343 22.569 51.214 20 46.412 20c-6.604 0-11.957 4.845-11.957 10.821q.002.593.074 1.182c-2.952.963-5.029 3.256-5.029 5.935c0 3.544 3.64 6.422 8.132 6.422a9.57 9.57 0 0 0 4.876-1.292c1.922 1.58 4.996 2.61 8.472 2.61c5.825 0 10.546-2.876 10.546-6.423a4 4 0 0 0-.064-.699c2.956-.964 5.038-3.259 5.038-5.94z"></svg:path><svg:path stroke-linejoin="round" stroke-miterlimit="10" d="M27 54c-1 0-3 1-5 1a5 5 0 0 0-5 5h10z"></svg:path></svg:g>`,
})
export class OpenmojiCampingIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
