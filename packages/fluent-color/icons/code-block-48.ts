import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorCodeBlock48Icon],svg[fluent-color-code-block-48-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorCodeBlock480)" d="M12 6a6 6 0 0 0-6 6v24a6 6 0 0 0 6 6h24a6 6 0 0 0 6-6V12a6 6 0 0 0-6-6z"></svg:path><svg:path fill="url(#fluentColorCodeBlock481)" d="M20.884 15.366a1.25 1.25 0 0 1 0 1.768L14.018 24l6.866 6.866a1.25 1.25 0 0 1-1.768 1.768l-7.75-7.75a1.25 1.25 0 0 1 0-1.768l7.75-7.75a1.25 1.25 0 0 1 1.768 0m8 0l7.75 7.75a1.25 1.25 0 0 1 0 1.768l-7.75 7.75a1.25 1.25 0 0 1-1.768-1.768L33.982 24l-6.866-6.866a1.25 1.25 0 0 1 1.768-1.768"></svg:path><svg:defs><svg:lineargradient id="fluentColorCodeBlock480" x1="14.778" x2="34.52" y1="6" y2="42" gradientUnits="userSpaceOnUse"><svg:stop offset=".028" stop-color="#E67EEA"></svg:stop><svg:stop offset=".438" stop-color="#AD64D7"></svg:stop><svg:stop offset="1" stop-color="#794DC5"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorCodeBlock481" x1="17.165" x2="28.034" y1="15.692" y2="42.785" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#FDFDFD"></svg:stop><svg:stop offset="1" stop-color="#F9DCFA"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class FluentColorCodeBlock48Icon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
