import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorBeach16Icon],svg[fluent-color-beach-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorBeach160)" d="m10.119 5.545l-.87-.495l-2.188 3.87l.869.495z"></svg:path><svg:path fill="url(#fluentColorBeach161)" d="M3.88 12.508L6 13.55l1.71-1.196L9.5 13.55l2-.696h.8a4.52 4.52 0 0 0-2.279-3.866a4.5 4.5 0 0 0-6.718 4.073l.578-.762z"></svg:path><svg:path fill="url(#fluentColorBeach162)" d="M4.12 11.75a.5.5 0 0 1 .495.343c.464 1.401 2.268 1.377 2.72.06a.5.5 0 0 1 .946 0c.453 1.317 2.257 1.341 2.722-.06a.5.5 0 0 1 .95.005c.235.733.948 1.201 1.664 1.201a.5.5 0 1 1 0 1a2.8 2.8 0 0 1-2.142-1.022c-.95 1.14-2.715 1.154-3.666.041c-.935 1.093-2.654 1.1-3.615.02a2.2 2.2 0 0 1-.636.584c-.492.297-1.054.377-1.558.377a.5.5 0 0 1 0-1c.413 0 .768-.068 1.04-.233c.256-.154.49-.423.614-.935a.5.5 0 0 1 .466-.38"></svg:path><svg:path fill="url(#fluentColorBeach163)" d="M12.66 7.793a.5.5 0 0 0 .688-.188l.095-.17c1.141-2.068.479-4.668-1.54-5.85c-2.02-1.18-4.59-.459-5.731 1.608l-.105.187a.5.5 0 0 0 .185.676z"></svg:path><svg:path fill="url(#fluentColorBeach164)" d="M12.013 1.653c.22.99.057 3.266-1.038 5.15L8.25 5.215c1.008-1.933 2.82-3.248 3.76-3.564l.002-.002v.002h.002z"></svg:path><svg:defs><svg:lineargradient id="fluentColorBeach160" x1="7.685" x2="10.429" y1="8.264" y2="4.899" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#CD3E1D"></svg:stop><svg:stop offset="1" stop-color="#592A00"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorBeach161" x1="7.267" x2="7.267" y1="12.75" y2="8.73" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#FFC7A3"></svg:stop><svg:stop offset="1" stop-color="#FFA43D"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorBeach162" x1="7.817" x2="7.817" y1="13.875" y2="11.755" gradientUnits="userSpaceOnUse"><svg:stop offset=".061" stop-color="#0FAFFF"></svg:stop><svg:stop offset="1" stop-color="#0078D4"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorBeach163" x1="13.164" x2="6.966" y1="9.198" y2="1.158" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#AA1D2D"></svg:stop><svg:stop offset="1" stop-color="#FB6F7B"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorBeach164" x1="11.933" x2="8.541" y1="4.782" y2="3.684" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#FECBE6"></svg:stop><svg:stop offset="1" stop-color="#FDAFD9"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class FluentColorBeach16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
