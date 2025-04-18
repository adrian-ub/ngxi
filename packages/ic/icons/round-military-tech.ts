import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icRoundMilitaryTechIcon],svg[ic-round-military-tech-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 10.43V3c0-.55-.45-1-1-1H8c-.55 0-1 .45-1 1v7.43c0 .35.18.68.49.86l4.18 2.51l-.99 2.34l-2.22.19c-.46.04-.64.59-.3.88l1.69 1.46l-.51 2.18c-.1.43.37.77.75.54L12 20.23l1.91 1.15c.38.23.85-.11.75-.54l-.51-2.18l1.69-1.46c.33-.29.16-.84-.29-.88l-2.22-.19l-.99-2.34l4.18-2.51c.3-.17.48-.49.48-.85m-4 1.8l-1 .6l-1-.6V3h2z"></svg:path>`,
})
export class IcRoundMilitaryTechIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
