import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[weuiMikeOutlinedIcon],svg[weui-mike-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8.7 6.5v6a3.3 3.3 0 1 0 6.6 0v-6a3.3 3.3 0 0 0-6.6 0m3.9 13.476V23h-1.2v-3.024A7.5 7.5 0 0 1 4.5 12.5V11h1.2v1.5a6.3 6.3 0 0 0 12.6 0V11h1.2v1.5a7.5 7.5 0 0 1-6.9 7.476M7.5 6.5a4.5 4.5 0 0 1 9 0v6a4.5 4.5 0 1 1-9 0z"></svg:path>`,
})
export class WeuiMikeOutlinedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
