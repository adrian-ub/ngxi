import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsFixpriceIcon],svg[arcticons-fixprice-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24.147 21.004h7.767c.308 0 .556.248.556.556v4.639a.555.555 0 0 1-.554.556h-7.769a.555.555 0 0 1-.556-.554V21.56c0-.308.248-.556.556-.556m0-9.38h8.649c.309 0 .557.249.557.556v4.64a.555.555 0 0 1-.555.555h-8.65a.555.555 0 0 1-.557-.553v-4.641c0-.307.248-.555.556-.555z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M15.203 11.624a.555.555 0 0 0-.556.554v23.643c0 .308.248.556.556.556h5.563a.555.555 0 0 0 .556-.554v-9.068h1.712a.555.555 0 0 0 .557-.553V21.56a.555.555 0 0 0-.553-.557h-1.715v-3.628h1.712a.555.555 0 0 0 .556-.554v-4.642a.555.555 0 0 0-.554-.556h-5.803z"></svg:path><svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class ArcticonsFixpriceIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
