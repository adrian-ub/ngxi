import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorPeople20Icon],svg[fluent-color-people-20-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorPeople200)" d="M10.5 12.5c0-.828.682-1.5 1.524-1.5h4.952c.842 0 1.524.672 1.524 1.5c0 0 0 3-4 3s-4-3-4-3"></svg:path><svg:path fill="url(#fluentColorPeople205)" fill-opacity=".5" d="M10.5 12.5c0-.828.682-1.5 1.524-1.5h4.952c.842 0 1.524.672 1.524 1.5c0 0 0 3-4 3s-4-3-4-3"></svg:path><svg:path fill="url(#fluentColorPeople201)" d="M1.5 13a2 2 0 0 1 2-2H10a2 2 0 0 1 2 2s0 4-5.25 4s-5.25-4-5.25-4"></svg:path><svg:path fill="url(#fluentColorPeople202)" d="M1.5 13a2 2 0 0 1 2-2H10a2 2 0 0 1 2 2s0 4-5.25 4s-5.25-4-5.25-4"></svg:path><svg:path fill="url(#fluentColorPeople203)" d="M14.5 10a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5"></svg:path><svg:path fill="url(#fluentColorPeople204)" d="M6.75 10a3.25 3.25 0 1 0 0-6.5a3.25 3.25 0 0 0 0 6.5"></svg:path><svg:defs><svg:lineargradient id="fluentColorPeople200" x1="12.402" x2="14" y1="11.598" y2="16.134" gradientUnits="userSpaceOnUse"><svg:stop offset=".125" stop-color="#9C6CFE"></svg:stop><svg:stop offset="1" stop-color="#7A41DC"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorPeople201" x1="3.997" x2="6.153" y1="11.798" y2="17.823" gradientUnits="userSpaceOnUse"><svg:stop offset=".125" stop-color="#BD96FF"></svg:stop><svg:stop offset="1" stop-color="#9C6CFE"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorPeople202" x1="6.75" x2="9.79" y1="10.286" y2="20.225" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#885EDB" stop-opacity="0"></svg:stop><svg:stop offset="1" stop-color="#E362F8"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorPeople203" x1="13.189" x2="15.737" y1="5.665" y2="9.734" gradientUnits="userSpaceOnUse"><svg:stop offset=".125" stop-color="#9C6CFE"></svg:stop><svg:stop offset="1" stop-color="#7A41DC"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorPeople204" x1="5.046" x2="8.358" y1="4.364" y2="9.654" gradientUnits="userSpaceOnUse"><svg:stop offset=".125" stop-color="#BD96FF"></svg:stop><svg:stop offset="1" stop-color="#9C6CFE"></svg:stop></svg:lineargradient><svg:radialgradient id="fluentColorPeople205" cx="0" cy="0" r="1" gradientTransform="rotate(-7.105 111.453 -69.765)scale(5.30556)" gradientUnits="userSpaceOnUse"><svg:stop offset=".392" stop-color="#3B148A"></svg:stop><svg:stop offset="1" stop-color="#3B148A" stop-opacity="0"></svg:stop></svg:radialgradient></svg:defs></svg:g>`,
})
export class FluentColorPeople20Icon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
