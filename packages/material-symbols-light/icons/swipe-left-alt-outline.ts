import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightSwipeLeftAltOutlineIcon],svg[material-symbols-light-swipe-left-alt-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.5 16.5q-1.748 0-3.005-1.137T10.023 12.5H4.921l2.095 2.1l-.708.708L3 12l3.308-3.308l.713.708l-2.1 2.1h5.102q.216-1.725 1.472-2.863T14.5 7.5q1.868 0 3.184 1.316Q19 10.13 19 11.997t-1.316 3.185T14.5 16.5m.002-1q1.46 0 2.479-1.022T18 11.999T16.978 9.52t-2.48-1.019t-2.479 1.022T11 12.002t1.022 2.479t2.48 1.019M14.5 12"></svg:path>`,
})
export class MaterialSymbolsLightSwipeLeftAltOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
