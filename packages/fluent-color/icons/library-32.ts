import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorLibrary32Icon],svg[fluent-color-library-32-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorLibrary320)" d="M3 5.5A2.5 2.5 0 0 1 5.5 3h2A2.5 2.5 0 0 1 10 5.5v21A2.5 2.5 0 0 1 7.5 29h-2A2.5 2.5 0 0 1 3 26.5zm9 0A2.5 2.5 0 0 1 14.5 3h2A2.5 2.5 0 0 1 19 5.5v21a2.5 2.5 0 0 1-2.5 2.5h-2a2.5 2.5 0 0 1-2.5-2.5zm9.8 2.105c-1.295.358-2.064 1.733-1.717 3.07l4.27 16.466c.348 1.338 1.678 2.131 2.973 1.773l1.875-.52c1.294-.357 2.063-1.732 1.716-3.07L26.647 8.86c-.348-1.338-1.678-2.131-2.973-1.773z"></svg:path><svg:path fill="url(#fluentColorLibrary321)" d="M3 8h7v3H3z"></svg:path><svg:path fill="url(#fluentColorLibrary322)" d="M27.296 11.365L20.72 13.13l.753 2.904l6.576-1.764z"></svg:path><svg:path fill="url(#fluentColorLibrary323)" d="M19 8h-7v3h7z"></svg:path><svg:defs><svg:lineargradient id="fluentColorLibrary320" x1="-18" x2="-16.286" y1="3" y2="38.067" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#43E5CA"></svg:stop><svg:stop offset="1" stop-color="#2764E7"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorLibrary321" x1="12" x2="20.493" y1="2.267" y2="5.253" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#9FF0F9"></svg:stop><svg:stop offset="1" stop-color="#6CE0FF"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorLibrary322" x1="12" x2="20.493" y1="2.267" y2="5.253" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#9FF0F9"></svg:stop><svg:stop offset="1" stop-color="#6CE0FF"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorLibrary323" x1="12" x2="20.493" y1="2.267" y2="5.253" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#9FF0F9"></svg:stop><svg:stop offset="1" stop-color="#6CE0FF"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class FluentColorLibrary32Icon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
