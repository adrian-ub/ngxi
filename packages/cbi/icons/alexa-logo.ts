import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cbiAlexaLogoIcon],svg[cbi-alexa-logo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.113 2a10 10 0 0 0-1.333 19.919V19.9a1.33 1.33 0 0 0-.9-1.261A7 7 0 1 1 19.113 12v.32c0 .081-.008.161-.014.241q.002.036-.007.076a2 2 0 0 1-.017.167l-.024.187l-.012.085c-.857 5.649-8.21 8.823-8.251 8.84a10 10 0 0 0 1.325.084a10 10 0 0 0 0-20"></svg:path>`,
})
export class CbiAlexaLogoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
