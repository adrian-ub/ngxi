import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightSwipeRightSharpIcon],svg[material-symbols-light-swipe-right-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 7.385q1.058-2.227 3.502-3.566t5.44-1.338q2.139 0 4.16.746t4.013 2.279V3H21v4.385h-4.384V6.5H19.9q-1.938-1.585-3.906-2.36t-4.052-.775q-2.584 0-4.722 1.075T3.94 7.384zM10.806 21l-5.667-5.654l.92-.894l3.441.857V6.5h1v7.77h1.827V10h1v4.27h1.846V11h1v3.27H18V13h1v8z"></svg:path>`,
})
export class MaterialSymbolsLightSwipeRightSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
