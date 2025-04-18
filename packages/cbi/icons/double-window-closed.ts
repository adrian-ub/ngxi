import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cbiDoubleWindowClosedIcon],svg[cbi-double-window-closed-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m4.426 2.728l.009 1.119v17.279l14.063.793l1.076.081V2Zm1.968 1.045l4.768-.173l.069 16.46l-4.837-.233Zm-.852 16.436V3.807h.274v16.2l5.417.31v.2zm12.76.7l-6.2-.342v-17l.27-.01V20.4l5.937.311zm0-.454l-5.352-.242V3.533l5.371-.2z"></svg:path>`,
})
export class CbiDoubleWindowClosedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
