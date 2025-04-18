import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uimVectorSquareIcon],svg[uim-vector-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 8a3 3 0 1 1 3-3a3.003 3.003 0 0 1-3 3m0-4a1 1 0 1 0 1 1a1 1 0 0 0-1-1m14 4a3 3 0 1 1 3-3a3.003 3.003 0 0 1-3 3m0-4a1 1 0 1 0 1 1a1 1 0 0 0-1-1M5 22a3 3 0 1 1 3-3a3.003 3.003 0 0 1-3 3m0-4a1 1 0 1 0 1 1a1 1 0 0 0-1-1m14 4a3 3 0 1 1 3-3a3.003 3.003 0 0 1-3 3m0-4a1 1 0 1 0 1 1a1 1 0 0 0-1-1"></svg:path><svg:path fill="currentColor" d="M16.184 20a2.8 2.8 0 0 1 0-2H7.816a2.8 2.8 0 0 1 0 2zM19 8a3 3 0 0 1-1-.184v8.368a2.8 2.8 0 0 1 2 0V7.816A3 3 0 0 1 19 8M7.816 4A3 3 0 0 1 8 5a3 3 0 0 1-.184 1h8.368A3 3 0 0 1 16 5a3 3 0 0 1 .184-1zM5 16a3 3 0 0 1 1 .184V7.816A3 3 0 0 1 5 8a3 3 0 0 1-1-.184v8.368A3 3 0 0 1 5 16" opacity=".5"></svg:path>`,
})
export class UimVectorSquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
