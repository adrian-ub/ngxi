import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[foundationPageMultipleIcon],svg[foundation-page-multiple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M86.45 23.27h-3.475v66.91c0 .835-.677 1.513-1.513 1.513H31.987v3.475c0 .836.677 1.513 1.513 1.513h52.951c.836 0 1.513-.677 1.513-1.513V24.782a1.513 1.513 0 0 0-1.514-1.512"></svg:path><svg:path fill="currentColor" d="M77.988 85.193V14.807c0-.836-.677-1.513-1.513-1.513H73v66.911c0 .836-.677 1.513-1.513 1.513H22.011v3.475c0 .836.677 1.513 1.513 1.513h52.951c.836 0 1.513-.677 1.513-1.513"></svg:path><svg:path fill="currentColor" d="M68.013 75.218V4.832c0-.836-.677-1.513-1.513-1.513H13.55c-.836 0-1.513.677-1.513 1.513v70.386c0 .836.677 1.513 1.513 1.513H66.5c.836 0 1.513-.677 1.513-1.513"></svg:path>`,
})
export class FoundationPageMultipleIcon {
  readonly viewBox = input("0 0 100 100")
  readonly width = input("1em")
  readonly height = input("1em")
}
