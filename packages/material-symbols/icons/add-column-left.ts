import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsAddColumnLeftIcon],svg[material-symbols-add-column-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 21V3h8v18zM4 21v-4.1q.25.05.488.075T5 17q2.075 0 3.538-1.45T10 12T8.537 8.45T5 7q-.275 0-.513.025T4 7.1V3h8v18zm0-6v-2H2v-2h2V9h2v2h2v2H6v2z"></svg:path>`,
})
export class MaterialSymbolsAddColumnLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
