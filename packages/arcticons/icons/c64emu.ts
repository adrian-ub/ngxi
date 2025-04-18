import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsC64emuIcon],svg[arcticons-c64emu-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M3.5 33.212V14.788c0-.56.454-1.014 1.014-1.014h38.972c.56 0 1.014.454 1.014 1.014v18.424c0 .56-.454 1.014-1.014 1.014H4.514c-.56 0-1.014-.454-1.014-1.014"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M26.178 20.506v2.705h4.593v-2.705zm-4.593 0v2.705h4.593v-2.705zm-4.603 0v2.705h4.603v-2.705zm-4.594 0v2.705h4.594v-2.705z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M23.876 23.21v2.705h4.593v-2.704zm-4.593 0v2.705h4.593v-2.704zm-4.603 0v2.705h4.603v-2.704zm-4.593 0v2.705h4.593v-2.704m11.498 2.704v2.704h4.593v-2.704zm-4.593 0v2.704h4.593v-2.704zm0 0h-4.603v2.704h4.603m-4.603-2.704h-4.594v2.704h4.594m-4.222.001H8.914v2.704h19.249v-2.705"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.388 20.506v2.705H5.494v2.704h4.593v-2.704m-2.292 2.704h4.593v2.704H5.494v-2.704m25.276-5.409v2.705h4.594v-2.705z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M26.178 20.506v2.705h4.593v-2.705z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M28.47 23.21v2.705h4.592v-2.704zm2.3 2.705v2.704h2.292v-2.704z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M26.178 25.915v2.704h4.593v-2.704z"></svg:path><svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M37.913 20.506v2.705h4.593v-2.705z"></svg:path><svg:path d="M37.913 23.21v2.705h4.593v-2.704zm0 2.705v2.704h4.593v-2.704zm0 2.705v2.704h4.593v-2.705z"></svg:path></svg:g><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M6.217 15.917h9.899m21.99 0h1.727M7.795 20.506v2.705h4.593v-2.705zM3.5 17.954h41"></svg:path>`,
})
export class ArcticonsC64emuIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
