import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagpackMgIcon],svg[flagpack-mg-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd" clip-rule="evenodd"><svg:path fill="#78D843" d="M12 12h20v12H12z"></svg:path><svg:path fill="#EA1A1A" d="M12 0h20v12H12z"></svg:path><svg:path fill="#F7FCFF" d="M0 0h12v24H0z"></svg:path></svg:g>`,
})
export class FlagpackMgIcon {
  readonly viewBox = input("0 0 32 24")
  readonly width = input("1.34em")
  readonly height = input("1em")
}
