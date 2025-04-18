import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpRealEstateAgentIcon],svg[ic-sharp-real-estate-agent-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 22h4V11H1zM14 1.5l-7 5V9h2l10 4v2h2V6.5zm-.5 8.5h-1V9h1zm0-2h-1V7h1zm2 2h-1V9h1zm0-2h-1V7h1zM22 19l-8 3l-7-1.98V11h1.97L17 14v2h-4l-1.76-.68l-.33.94L13 17h9z"></svg:path>`,
})
export class IcSharpRealEstateAgentIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
