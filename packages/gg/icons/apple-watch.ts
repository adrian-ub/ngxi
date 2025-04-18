import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggAppleWatchIcon],svg[gg-apple-watch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M16.498 5.03q0 .072-.005.143A3 3 0 0 1 18.5 8.005v1h1v4h-1v3a3 3 0 0 1-2.005 2.83q.005.085.005.17a3 3 0 0 1-3 3h-4a3 3 0 0 1-2.995-3.17a3 3 0 0 1-2.005-2.83v-8a3 3 0 0 1 2.003-2.83a3 3 0 0 1 3.01-3.18l4 .02a3 3 0 0 1 2.984 3.015m-8-.025h6a1 1 0 0 0-.995-.99l-4-.02a1 1 0 0 0-1.005.995zm7.207 2.021l-4.22-.021H7.5a1 1 0 0 0-1 1v8a1 1 0 0 0 .999 1H15.5a1 1 0 0 0 .999-1v-8a1 1 0 0 0-.795-.979M8.5 19.005a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1z" clip-rule="evenodd"></svg:path>`,
})
export class GgAppleWatchIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
