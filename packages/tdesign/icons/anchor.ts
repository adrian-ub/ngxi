import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignAnchorIcon],svg[tdesign-anchor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3a2 2 0 1 0 0 4a2 2 0 0 0 0-4M8 5a4 4 0 1 1 5 3.874V10.5h4.5v2H13v8.458c3.133-.267 5.643-1.796 6.802-4.228l-1.23-1.23l4.048-4.048l-.135 2.6C22.19 19.74 17.455 23 12 23S1.81 19.74 1.515 14.052l-.135-2.6L5.427 15.5l-1.23 1.23c1.159 2.432 3.67 3.96 6.802 4.228V12.5H6.5v-2H11V8.874A4 4 0 0 1 8 5"></svg:path>`,
})
export class TdesignAnchorIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
