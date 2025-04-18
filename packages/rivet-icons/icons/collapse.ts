import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[rivetIconsCollapseIcon],svg[rivet-icons-collapse-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m.586 14l3-3H1V9h6v6H5v-2.586l-3 3zM15.414 2l-3 3H15v2H9V1h2v2.586l3-3z"></svg:path>`,
})
export class RivetIconsCollapseIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
