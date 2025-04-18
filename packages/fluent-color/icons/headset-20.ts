import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorHeadset20Icon],svg[fluent-color-headset-20-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorHeadset200)" fill-rule="evenodd" d="M6 12v2a1 1 0 0 0 1 1h2v2H7a3 3 0 0 1-3-3v-2z" clip-rule="evenodd"></svg:path><svg:path fill="url(#fluentColorHeadset201)" d="M12 16a2 2 0 1 1-4 0a2 2 0 0 1 4 0"></svg:path><svg:path fill="url(#fluentColorHeadset202)" d="m14 8l1 1l1-1A6 6 0 0 0 4 8l1 1l1-1a4 4 0 1 1 8 0"></svg:path><svg:path fill="url(#fluentColorHeadset203)" d="M6 8h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H6l-1-2.5z"></svg:path><svg:path fill="url(#fluentColorHeadset204)" d="m15 12l-1 1h-1a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h1l1 1z"></svg:path><svg:path fill="url(#fluentColorHeadset205)" d="M6 8H4v5h2z"></svg:path><svg:path fill="url(#fluentColorHeadset206)" d="M16 8h-2v5a2 2 0 0 0 2-2z"></svg:path><svg:defs><svg:lineargradient id="fluentColorHeadset200" x1="6.917" x2="5.289" y1="16.167" y2="12.07" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#9CA5AD"></svg:stop><svg:stop offset="1" stop-color="#70777D"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorHeadset201" x1="11.5" x2="8.112" y1="17.5" y2="15.521" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#383B3D"></svg:stop><svg:stop offset="1" stop-color="#70777D"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorHeadset202" x1=".25" x2="3.814" y1="3.098" y2="11.079" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#B9C0C7"></svg:stop><svg:stop offset="1" stop-color="#70777D"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorHeadset203" x1="13.542" x2="13.542" y1="8" y2="13" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#0FAFFF"></svg:stop><svg:stop offset="1" stop-color="#0067BF"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorHeadset204" x1="13.542" x2="13.542" y1="8" y2="13" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#0FAFFF"></svg:stop><svg:stop offset="1" stop-color="#0067BF"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorHeadset205" x1="15" x2="14.326" y1="8" y2="12.908" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#0078D4"></svg:stop><svg:stop offset="1" stop-color="#2052CB"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorHeadset206" x1="15" x2="14.326" y1="8" y2="12.908" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#0078D4"></svg:stop><svg:stop offset="1" stop-color="#2052CB"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class FluentColorHeadset20Icon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
