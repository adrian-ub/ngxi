import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonContinuousIntegrationIcon],svg[carbon-continuous-integration-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m31.9 15.5l-5.7-10c-.3-.3-.6-.5-.9-.5H6.7c-.3 0-.6.2-.8.5l-5.7 10c-.2.2-.2.3-.2.5s0 .3.1.5l5.7 10c.3.3.6.5.9.5h18.5c.4 0 .7-.2.9-.5l5.7-10c.2-.2.2-.3.2-.5s0-.3-.1-.5M17.8 15h-8l4-7zm-2.3-8h8l-4 7zm2.3 10l-4 7l-4-7zm1.7 1l4 7h-8zm1.7-1h8l-4 7zm0-2l4-7l4 7zM7.3 7H12l-4.6 8H2.7zm0 18l-4.6-8h4.7l4.6 8z"></svg:path>`,
})
export class CarbonContinuousIntegrationIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
