import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[weuiDisplayOutlinedIcon],svg[weui-display-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.2 5.2v12.6h17.6V5.2zM2 5a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1zm6 15.9c0-.331.266-.6.601-.6H15.4c.332 0 .601.278.601.6v.6H8z"></svg:path>`,
})
export class WeuiDisplayOutlinedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
