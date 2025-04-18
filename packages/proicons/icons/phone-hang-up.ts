import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsPhoneHangUpIcon],svg[proicons-phone-hang-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="1.5" d="M12.116 7.953c-3.053 0-5.346.706-6.899 1.433c-1.702.797-2.467 2.632-2.467 4.512v.649a1.5 1.5 0 0 0 1.5 1.5h1.625a1.5 1.5 0 0 0 1.5-1.5V14a2 2 0 0 1 2-2h5.25a2 2 0 0 1 2 2v.547a1.5 1.5 0 0 0 1.5 1.5h1.625a1.5 1.5 0 0 0 1.5-1.5v-.81c0-1.784-.691-3.537-2.293-4.325c-1.496-.736-3.752-1.459-6.841-1.459Z"></svg:path>`,
})
export class ProiconsPhoneHangUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
