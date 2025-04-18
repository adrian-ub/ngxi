import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cibFlattrIcon],svg[cib-flattr-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.541 16C2.541 8.579 8.578 2.541 16 2.541h7.271l-3.896 3.907l1.792 1.792L29.203 0H16C7.161 0 0 7.161 0 16v12.443l2.547-2.349v-.124c-.005-.329-.005-9.876-.005-9.969zM32 3.557l-2.547 2.349v.124l.005 9.969c0 7.421-6.037 13.459-13.459 13.459H8.728l3.896-3.907l-1.792-1.792l-8.036 8.24h13.203c8.839 0 16-7.161 16-16z"></svg:path>`,
})
export class CibFlattrIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
