import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cibZendeskIcon],svg[cib-zendesk-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.781 28.125H0l14.781-17.844zm17.219 0H17.219a7.392 7.392 0 0 1 14.782 0zm-14.781-6.406V3.875H32zM14.781 3.875a7.392 7.392 0 0 1-14.782 0z"></svg:path>`,
})
export class CibZendeskIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
