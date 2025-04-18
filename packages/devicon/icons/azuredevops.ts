import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[deviconAzuredevopsIcon],svg[devicon-azuredevops-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:lineargradient id="deviconAzuredevops0" x1="9" x2="9" y1="16.97" y2="1.03" gradientTransform="scale(7.11111)" gradientUnits="userSpaceOnUse"><svg:stop offset="0" stop-color="#0078d4"></svg:stop><svg:stop offset=".16" stop-color="#1380da"></svg:stop><svg:stop offset=".53" stop-color="#3c91e5"></svg:stop><svg:stop offset=".82" stop-color="#559cec"></svg:stop><svg:stop offset="1" stop-color="#5ea0ef"></svg:stop></svg:lineargradient></svg:defs><svg:path fill="url(#deviconAzuredevops0)" d="M120.89 28.445v69.262l-28.445 23.324l-44.09-16.07v15.93L23.395 88.25l72.746 5.688V31.574ZM96.64 31.93L55.82 7.11v16.285L18.348 34.418L7.109 48.852v32.785l16.075 7.11V46.718Zm0 0"></svg:path>`,
})
export class DeviconAzuredevopsIcon {
  readonly viewBox = input("0 0 128 128")
  readonly width = input("1em")
  readonly height = input("1em")
}
