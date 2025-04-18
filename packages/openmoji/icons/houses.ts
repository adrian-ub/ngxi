import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiHousesIcon],svg[openmoji-houses-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#fff" d="M14.5 41.5h23v16h-23z"></svg:path><svg:path fill="#fff" d="M34.61 26.9h22l.813 16.099l-23.078-.204z"></svg:path><svg:path fill="#92d3f5" d="M48.5 32h5v4h-5z"></svg:path><svg:path fill="#ea5a47" d="M57.5 26.327L35 26.182L46 15l11.5 10.537zM21 34.581l-4 3.665V32h4zm20-15l-4 3.665V17h4z"></svg:path><svg:path fill="#a57939" d="M38 33h8v9.992h-8zM19 47h6v10h-6z"></svg:path><svg:path fill="#92d3f5" d="M28.5 47h5v4h-5z"></svg:path><svg:path fill="#ea5a47" d="M37.5 42h-23v-1.463L26 30l11.5 10.537z"></svg:path><svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M48.5 32h5v4h-5zm9-5h-23M21 34.581l-4 3.665V32h4zm20-15l-4 3.665V17h4z"></svg:path><svg:path d="M34.5 33v-7.463L46 15l11.5 10.537V42h-16"></svg:path><svg:path d="M45 42V32h-6v4.088M19 47h6v10h-6zm9.5 0h5v4h-5zm9-5h-23v-1.463L26 30l11.5 10.537z"></svg:path><svg:path d="M14.5 42h23v15h-23z"></svg:path></svg:g>`,
})
export class OpenmojiHousesIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
