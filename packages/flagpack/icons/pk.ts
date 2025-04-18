import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagpackPkIcon],svg[flagpack-pk-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd" clip-rule="evenodd"><svg:path fill="#2F8D00" d="M8 0h24v24H8z"></svg:path><svg:path fill="#F7FCFF" d="M0 0h8v24H0z"></svg:path><svg:path fill="#F1F9FF" d="M22.43 15.306s-4.466 1.165-8.011-1.21s-1.763-7.848-1.763-7.848c-1.849.269-4.752 7.015-.072 10.398s9.164.131 9.845-1.34m-4.956-6.44l-2.372 1.16l2.502.446l.338 2.445l1.417-2.083l2.788.189l-2.184-1.63l1.163-2.176l-2.174.996l-1.616-1.519z"></svg:path></svg:g>`,
})
export class FlagpackPkIcon {
  readonly viewBox = input("0 0 32 24")
  readonly width = input("1.34em")
  readonly height = input("1em")
}
