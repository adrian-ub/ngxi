import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenPolyxIcon],svg[token-polyx-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.969 12c1.038 0 2.207-.44 2.207-1.588c0-1.107-1.122-1.589-2.207-1.589H9.882V7.765h3.25c1.706 0 3.103.863 3.103 2.647s-1.466 2.647-3.102 2.647H10.94v3.706H9.882V12z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M12 21a9 9 0 1 0 0-17.999A9 9 0 0 0 12 21m0-1.059a7.942 7.942 0 1 0 0-15.883a7.942 7.942 0 0 0 0 15.883" clip-rule="evenodd"></svg:path>`,
})
export class TokenPolyxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
