import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icRoundAppRegistrationIcon],svg[ic-round-app-registration-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="12" cy="6" r="2" fill="currentColor"></svg:circle><svg:circle cx="6" cy="18" r="2" fill="currentColor"></svg:circle><svg:circle cx="6" cy="12" r="2" fill="currentColor"></svg:circle><svg:circle cx="6" cy="6" r="2" fill="currentColor"></svg:circle><svg:circle cx="18" cy="6" r="2" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M11 18.07v1.43c0 .28.22.5.5.5h1.4c.13 0 .26-.05.35-.15l5.83-5.83l-2.12-2.12l-5.81 5.81c-.1.1-.15.23-.15.36M12.03 14L14 12.03V12c0-1.1-.9-2-2-2s-2 .9-2 2s.9 2 2 2zm8.82-2.44l-1.41-1.41c-.2-.2-.51-.2-.71 0l-1.06 1.06l2.12 2.12l1.06-1.06c.2-.2.2-.51 0-.71"></svg:path>`,
})
export class IcRoundAppRegistrationIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
