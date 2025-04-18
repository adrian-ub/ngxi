import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[guidanceHealthServicesIcon],svg[guidance-health-services-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M8.5 8.5v-8h.25l.27.054c.652.13 2.315.196 2.98.196s2.329-.066 2.98-.196L15.25.5h.25v8h8v.25l-.054.27c-.13.652-.196 2.315-.196 2.98s.066 2.329.196 2.98l.054.27v.25h-8v8h-.25l-.27-.054c-.652-.13-2.315-.196-2.98-.196s-2.328.066-2.98.196l-.27.054H8.5v-8h-8v-.25l.054-.27c.13-.652.196-2.315.196-2.98S.684 9.672.554 9.02L.5 8.75V8.5z"></svg:path>`,
})
export class GuidanceHealthServicesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
