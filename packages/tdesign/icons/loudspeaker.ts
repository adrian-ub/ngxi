import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignLoudspeakerIcon],svg[tdesign-loudspeaker-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 1.382V15.5l-7.2-3h-.91L7.712 14H9.5v2H7.477l-.588 5H2V5h6.764zM5.875 12.5H4V19h1.11zM4 10.5h5.2l4.8 2V4.618L9.236 7H4zm16.333-5.914l.707.707c.937.937 1.328 2.342 1.328 3.624c0 1.281-.391 2.687-1.328 3.624l-.707.707l-1.414-1.414l.707-.708c.444-.443.742-1.264.742-2.21c0-.945-.298-1.765-.742-2.209L18.919 6zM18.25 6.255l.707.707a2.77 2.77 0 0 1 0 3.914l-.707.707l-1.415-1.414l.707-.707c.3-.3.3-.786 0-1.086l-.707-.707z"></svg:path>`,
})
export class TdesignLoudspeakerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
