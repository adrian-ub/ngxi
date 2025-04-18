import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mingcuteLayout5LineIcon],svg[mingcute-layout-5-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="M0 0h24v24H0z"></svg:path><svg:path fill="currentColor" d="M19 3a2 2 0 0 1 1.995 1.85L21 5v14a2 2 0 0 1-1.85 1.995L19 21H5a2 2 0 0 1-1.995-1.85L3 19V5a2 2 0 0 1 1.85-1.995L5 3zm0 7H5v9h14zm-3 5a1 1 0 0 1 .117 1.993L16 17H8a1 1 0 0 1-.117-1.993L8 15zm0-3a1 1 0 1 1 0 2H8a1 1 0 1 1 0-2zm3-7H5v3h14z"></svg:path></svg:g>`,
})
export class MingcuteLayout5LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
