import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiAmazonAlexaIcon],svg[mdi-amazon-alexa-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2m-1.57 19.87v-1.96c0-.69-.43-1.34-1.08-1.61c-2.44-1.04-4.18-3.47-4.18-6.3c0-3.74 3.05-6.83 6.83-6.83c3.78 0 6.83 3.09 6.83 6.83c0 4.43-3.44 8.61-8.4 9.87z" fill="currentColor"></svg:path>`,
})
export class MdiAmazonAlexaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
