import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorPin32Icon],svg[fluent-color-pin-32-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorPin320)" fill-rule="evenodd" d="M12.707 19.293a1 1 0 0 1 0 1.414l-7 7a1 1 0 0 1-1.414-1.414l7-7a1 1 0 0 1 1.414 0" clip-rule="evenodd"></svg:path><svg:path fill="#D9D9D9" d="M15.744 4.276c1.221-2.442 4.476-2.97 6.407-1.04l6.613 6.614c1.93 1.93 1.403 5.185-1.04 6.406l-6.35 3.175a1.5 1.5 0 0 0-.752.868L18.96 25.28a2 2 0 0 1-3.312.782L5.936 16.35a2 2 0 0 1 .782-3.311l4.983-1.661a1.5 1.5 0 0 0 .867-.752z"></svg:path><svg:path fill="url(#fluentColorPin321)" d="M15.744 4.276c1.221-2.442 4.476-2.97 6.407-1.04l6.613 6.614c1.93 1.93 1.403 5.185-1.04 6.406l-6.35 3.175a1.5 1.5 0 0 0-.752.868L18.96 25.28a2 2 0 0 1-3.312.782L5.936 16.35a2 2 0 0 1 .782-3.311l4.983-1.661a1.5 1.5 0 0 0 .867-.752z"></svg:path><svg:path fill="url(#fluentColorPin322)" fill-opacity=".8" d="M15.744 4.276c1.221-2.442 4.476-2.97 6.407-1.04l6.613 6.614c1.93 1.93 1.403 5.185-1.04 6.406l-6.35 3.175a1.5 1.5 0 0 0-.752.868L18.96 25.28a2 2 0 0 1-3.312.782L5.936 16.35a2 2 0 0 1 .782-3.311l4.983-1.661a1.5 1.5 0 0 0 .867-.752z"></svg:path><svg:defs><svg:lineargradient id="fluentColorPin320" x1="6.25" x2="12.952" y1="25.749" y2="20.625" gradientUnits="userSpaceOnUse"><svg:stop offset=".449" stop-color="#7B7BFF"></svg:stop><svg:stop offset="1" stop-color="#102784"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorPin321" x1="6.229" x2="23.196" y1="6.674" y2="24.302" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#43E5CA"></svg:stop><svg:stop offset="1" stop-color="#1384B1"></svg:stop></svg:lineargradient><svg:radialgradient id="fluentColorPin322" cx="0" cy="0" r="1" gradientTransform="matrix(7.37226 8.06774 -20.24015 18.49534 24.336 21.794)" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#E362F8"></svg:stop><svg:stop offset="1" stop-color="#96F" stop-opacity="0"></svg:stop></svg:radialgradient></svg:defs></svg:g>`,
})
export class FluentColorPin32Icon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
