import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconRotationLeftOutlineIcon],svg[lsicon-rotation-left-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" d="M7.1 3.969h2.4a4 4 0 0 1 4 4v.06M7.1 3.97l1.5-1.594M7.1 3.97l1.5 1.593M2.5 7.527h8v6h-8z"></svg:path>`,
})
export class LsiconRotationLeftOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
