import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenPwrIcon],svg[token-pwr-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.998 20.998a9.004 9.004 0 0 0 8.653-11.483q.068.388.068.793c0 3.6-3.562 4.5-5.345 4.5H8.622l-.562 2.814H4.965a9 9 0 0 0 7.033 3.376"></svg:path><svg:path fill="currentColor" d="M4.74 17.323A9.002 9.002 0 1 1 20.268 8.44c-.518-.872-1.558-1.507-3.488-1.507H8.622L5.809 9.745h9.564V8.62l3.376 2.25l-3.376 2.25v-1.125H5.81z"></svg:path>`,
})
export class TokenPwrIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
