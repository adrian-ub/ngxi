import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineVrHeadset2SolidIcon],svg[streamline-vr-headset-2-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5.143.929a.5.5 0 0 0-.496.438l-.254 2.027h5.214l-.254-2.027a.5.5 0 0 0-.496-.438zm4.686 3.714l-.043.001H4.214l-.043-.001H2.357C1.057 4.643 0 5.693 0 6.993v3.663c0 1.537 1.441 2.639 2.915 2.377C4.163 12.81 5.695 12.6 7 12.6s2.837.21 4.085.433c1.474.262 2.915-.84 2.915-2.377V6.992c0-1.3-1.057-2.35-2.357-2.35H9.829Zm-6.24 3.286c0-.345.28-.625.625-.625h5.572a.625.625 0 0 1 0 1.25H4.214a.625.625 0 0 1-.625-.625" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineVrHeadset2SolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
