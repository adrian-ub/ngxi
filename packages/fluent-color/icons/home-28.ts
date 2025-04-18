import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorHome28Icon],svg[fluent-color-home-28-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorHome280)" d="M10 15h8v10h-8z"></svg:path><svg:path fill="url(#fluentColorHome281)" d="M15.408 4.498a2.25 2.25 0 0 0-2.816 0l-7.75 6.217A2.25 2.25 0 0 0 4 12.47v10.28A2.25 2.25 0 0 0 6.25 25H11v-7.75c0-.69.56-1.25 1.25-1.25h3.5c.69 0 1.25.56 1.25 1.25V25h4.75A2.25 2.25 0 0 0 24 22.75V12.47a2.25 2.25 0 0 0-.842-1.755z"></svg:path><svg:path fill="url(#fluentColorHome282)" fill-rule="evenodd" d="m14 5.715l-9.714 7.863a1.25 1.25 0 0 1-1.573-1.943L12.9 3.39a1.75 1.75 0 0 1 2.202 0l10.186 8.245a1.25 1.25 0 0 1-1.573 1.943z" clip-rule="evenodd"></svg:path><svg:defs><svg:lineargradient id="fluentColorHome280" x1="14" x2="7.592" y1="15" y2="26.396" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#944600"></svg:stop><svg:stop offset="1" stop-color="#CD8E02"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorHome281" x1="5.909" x2="26.285" y1="2.976" y2="18.752" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#FFD394"></svg:stop><svg:stop offset="1" stop-color="#FFB357"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorHome282" x1="10.203" x2="14.689" y1=".421" y2="13.551" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#FF921F"></svg:stop><svg:stop offset="1" stop-color="#EB4824"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class FluentColorHome28Icon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
