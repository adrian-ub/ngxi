import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiFaucetIcon],svg[mdi-faucet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 14v2h-3v-1.72zm0-1c0-1.1-1-2-2.2-2H10v-1H5v11h5v-7.09zM5 9h5V7l5.36-1.79a.932.932 0 1 0-.61-1.76L5 7z"></svg:path>`,
})
export class MdiFaucetIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
