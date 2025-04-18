import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiFlagJerseyIcon],svg[openmoji-flag-jersey-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#fff" d="M5 17h62v38H5z"></svg:path><svg:path fill="#d22f27" d="M67 20v-3h-4L5 52v3h4z"></svg:path><svg:path fill="#d22f27" d="M5 20v-3h4l58 35v3h-4z"></svg:path><svg:path fill="#d22f27" stroke="#d22f27" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.522" d="M38.74 22.34s.296.582.3 2.759c.003 2.177-.988 4.162-3.017 5.113c-2.03-.951-3.071-2.972-3.071-5.113s.3-2.759.3-2.759z"></svg:path><svg:path fill="#fcea2b" fill-rule="evenodd" stroke="#fcea2b" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width=".986" d="M32.66 19.96h6.683l-.566 1.193h-5.604z"></svg:path><svg:rect width="5.478" height=".868" x="33.26" y="22.72" fill="#fcea2b" fill-rule="evenodd" stroke="#fcea2b" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width=".632" paint-order="stroke fill markers" ry=".017"></svg:rect><svg:rect width="5.478" height=".868" x="33.26" y="25.08" fill="#fcea2b" fill-rule="evenodd" stroke="#fcea2b" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width=".632" paint-order="stroke fill markers" ry=".017"></svg:rect><svg:rect width="4.526" height=".717" x="33.74" y="27.39" fill="#fcea2b" fill-rule="evenodd" stroke="#fcea2b" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width=".522" paint-order="stroke fill markers" ry=".014"></svg:rect><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 17h62v38H5z"></svg:path>`,
})
export class OpenmojiFlagJerseyIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
