import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconLinecapRoundFilledIcon],svg[lsicon-linecap-round-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M2 2h6a6 6 0 0 1 0 12H2v-1h6A5 5 0 0 0 8 3H2zm0 5.5h6v1H2z"></svg:path><svg:path d="M6.48 7.98a1.5 1.5 0 1 1 3 0a1.5 1.5 0 0 1-3 0"></svg:path></svg:g>`,
})
export class LsiconLinecapRoundFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
