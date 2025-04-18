import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightSwipeRightAltIcon],svg[material-symbols-light-swipe-right-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.5 16.5q-1.864 0-3.182-1.318T5 12t1.318-3.182T9.5 7.5q1.748 0 3.005 1.138t1.472 2.862h5.102l-2.094-2.1l.707-.708L21 12l-3.308 3.308l-.713-.708l2.1-2.1h-5.102q-.215 1.725-1.472 2.863T9.5 16.5"></svg:path>`,
})
export class MaterialSymbolsLightSwipeRightAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
