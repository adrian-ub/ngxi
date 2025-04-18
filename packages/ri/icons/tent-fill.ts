import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riTentFillIcon],svg[ri-tent-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12.866 3l9.237 16H23v2H1v-2h.896l9.238-16a1 1 0 0 1 1.732 0M12 12.925L8.659 19h6.682z"></svg:path>`,
})
export class RiTentFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
