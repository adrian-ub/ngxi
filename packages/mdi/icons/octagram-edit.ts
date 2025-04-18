import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiOctagramEditIcon],svg[mdi-octagram-edit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.2 16.06L3.88 12L2.2 7.94l4.06-1.68L7.94 2.2L12 3.88l4.06-1.68l1.68 4.06l4.06 1.68l-.86 2.06c-.56.06-1.12.3-1.56.75L11 19.13v1.4L7.94 21.8l-1.68-4.06zm17.63-2.93l.98-.98c.19-.2.52-.2.72 0l1.32 1.32c.2.2.2.53 0 .72l-.98.98zm1.34 2.75L15.04 22H13v-2.04l6.13-6.13z"></svg:path>`,
})
export class MdiOctagramEditIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
