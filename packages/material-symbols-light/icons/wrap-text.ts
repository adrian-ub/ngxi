import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightWrapTextIcon],svg[material-symbols-light-wrap-text-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.566 19.93L11.692 17l2.874-2.911l.707.719l-1.654 1.692h3.304q.879 0 1.478-.628T19 14.366q0-.88-.599-1.498t-1.478-.618H5v-1h11.923q1.287 0 2.182.915q.895.914.895 2.2t-.895 2.211t-2.182.924h-3.304l1.654 1.712zM5 17.5v-1h3.808v1zM5 7V6h14.058v1z"></svg:path>`,
})
export class MaterialSymbolsLightWrapTextIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
