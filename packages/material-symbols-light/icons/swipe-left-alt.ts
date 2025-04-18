import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightSwipeLeftAltIcon],svg[material-symbols-light-swipe-left-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.5 16.5q-1.748 0-3.005-1.137T10.023 12.5H4.921l2.095 2.1l-.708.708L3 12l3.308-3.308l.713.708l-2.1 2.1h5.102q.216-1.725 1.472-2.863T14.5 7.5q1.864 0 3.182 1.318T19 12t-1.318 3.182T14.5 16.5"></svg:path>`,
})
export class MaterialSymbolsLightSwipeLeftAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
