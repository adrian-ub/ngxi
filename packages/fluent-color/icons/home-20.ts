import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorHome20Icon],svg[fluent-color-home-20-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorHome200)" d="M7 11h6v6H7z"></svg:path><svg:path fill="url(#fluentColorHome201)" d="M11.003 3.384a1.5 1.5 0 0 0-2.005 0l-5.5 4.942A1.5 1.5 0 0 0 3 9.442v6.054a1.5 1.5 0 0 0 1.5 1.5H6V17h2v-5.504a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5V17h3v-.004h.5a1.5 1.5 0 0 0 1.5-1.5V9.442a1.5 1.5 0 0 0-.497-1.116z"></svg:path><svg:path fill="url(#fluentColorHome202)" fill-rule="evenodd" d="M10.644 2.239a.986.986 0 0 0-1.288 0l-7.03 6.103a.934.934 0 0 0-.082 1.34a.985.985 0 0 0 1.369.079L10 4.216l6.387 5.545a.985.985 0 0 0 1.369-.08a.934.934 0 0 0-.082-1.339z" clip-rule="evenodd"></svg:path><svg:path fill="url(#fluentColorHome203)" fill-rule="evenodd" d="M9.356 2.239a.986.986 0 0 1 1.287 0l7.031 6.103c.4.348.437.947.082 1.34a.985.985 0 0 1-1.369.079L10 4.216L3.613 9.761a.985.985 0 0 1-1.369-.08a.934.934 0 0 1 .082-1.339z" clip-rule="evenodd"></svg:path><svg:defs><svg:lineargradient id="fluentColorHome200" x1="10" x2="6.633" y1="11" y2="18.485" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#944600"></svg:stop><svg:stop offset="1" stop-color="#CD8E02"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorHome201" x1="4.336" x2="18.074" y1="2.315" y2="13.481" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#FFD394"></svg:stop><svg:stop offset="1" stop-color="#FFB357"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorHome202" x1="7.415" x2="10.929" y1=".1" y2="9.604" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#FF921F"></svg:stop><svg:stop offset="1" stop-color="#EB4824"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorHome203" x1="7.415" x2="10.929" y1=".1" y2="9.604" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#FF921F"></svg:stop><svg:stop offset="1" stop-color="#EB4824"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class FluentColorHome20Icon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
