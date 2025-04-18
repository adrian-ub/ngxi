import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorHeadphones20Icon],svg[fluent-color-headphones-20-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorHeadphones200)" d="m3 13l-1-1v-2a8 8 0 1 1 16 0v2l-1 1l-1-1v-2a6 6 0 0 0-12 0v2z"></svg:path><svg:path fill="url(#fluentColorHeadphones201)" d="M4.5 11H2v5a2 2 0 0 0 2 2h1v-6.5a.5.5 0 0 0-.5-.5"></svg:path><svg:path fill="url(#fluentColorHeadphones202)" d="M17.5 11H15v7h1a2 2 0 0 0 2-2v-4.5a.5.5 0 0 0-.5-.5"></svg:path><svg:path fill="url(#fluentColorHeadphones203)" d="M7 11H4v7h3a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1"></svg:path><svg:path fill="url(#fluentColorHeadphones204)" d="M13 11h3v7h-3a1 1 0 0 1-1-1v-5a1 1 0 0 1 1-1"></svg:path><svg:defs><svg:lineargradient id="fluentColorHeadphones200" x1="-3.714" x2="-1.292" y1="2" y2="11.178" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#B9C0C7"></svg:stop><svg:stop offset="1" stop-color="#70777D"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorHeadphones201" x1="16.5" x2="16.5" y1="11" y2="18" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#0078D4"></svg:stop><svg:stop offset="1" stop-color="#2052CB"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorHeadphones202" x1="16.5" x2="16.5" y1="11" y2="18" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#0078D4"></svg:stop><svg:stop offset="1" stop-color="#2052CB"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorHeadphones203" x1="14.25" x2="14.25" y1="11" y2="18" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#0FAFFF"></svg:stop><svg:stop offset="1" stop-color="#0067BF"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorHeadphones204" x1="14.25" x2="14.25" y1="11" y2="18" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#0FAFFF"></svg:stop><svg:stop offset="1" stop-color="#0067BF"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class FluentColorHeadphones20Icon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
