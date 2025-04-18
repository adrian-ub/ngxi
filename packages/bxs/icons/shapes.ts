import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxsShapesIcon],svg[bxs-shapes-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.867 2.504c-.355-.624-1.381-.623-1.736 0l-3.999 7A1 1 0 0 0 13 11h8a1 1 0 0 0 .868-1.496zM3 22h7a1 1 0 0 0 1-1v-7a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1m14.5-9c-2.481 0-4.5 2.019-4.5 4.5s2.019 4.5 4.5 4.5s4.5-2.019 4.5-4.5s-2.019-4.5-4.5-4.5"></svg:path>`,
})
export class BxsShapesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
