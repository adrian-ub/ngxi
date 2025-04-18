import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[weuiTvOutlinedIcon],svg[weui-tv-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.2 5.2v12.6h17.6V5.2zM2 5a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1zm6 15.9c0-.331.266-.6.601-.6H15.4c.332 0 .601.278.601.6v.6H8zm3.665-12.004H9.81V15H8.716V8.896H6.558v-.942h5.958l1.919 5.816h.029l1.924-5.816h1.167L15.04 15h-1.196z"></svg:path>`,
})
export class WeuiTvOutlinedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
