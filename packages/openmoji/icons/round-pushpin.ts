import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiRoundPushpinIcon],svg[openmoji-round-pushpin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#EA5A47" d="M35.972 9.72c-6.422 0-11.646 5.224-11.646 11.646S29.55 33.01 35.972 33.01c6.421 0 11.646-5.224 11.646-11.645S42.393 9.72 35.972 9.72"></svg:path><svg:path fill="#D22F27" d="M39.169 32.382c1.726-.646 3.289-.817 4.814-2.212c2.102-1.923 3.904-5.34 3.904-8.024c0-2.445-.578-5.303-2.342-7.633c-1.628-2.15-4.361-3.842-6.376-4.554c0 0 3.517 5.65 3.517 11.373s-3.517 11.05-3.517 11.05"></svg:path><svg:path fill="#D0CFCE" d="m35.837 63.489l2.847-7.67s-.825-19.577-.38-19.678h-5.168c.446.1-.225 19.559-.225 19.559z"></svg:path><svg:path fill="#9B9B9A" d="m35.956 62.738l2.649-7.078s.104-19.057.062-19.526l-2.933.007z"></svg:path><svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"><svg:circle cx="35.971" cy="21.366" r="11.808"></svg:circle><svg:path d="M38.52 37.098v18.616l-2.584 8.505l-3.015-8.505V37.098"></svg:path></svg:g>`,
})
export class OpenmojiRoundPushpinIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
