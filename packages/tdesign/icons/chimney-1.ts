import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignChimney1Icon],svg[tdesign-chimney-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.28 2H1.72l1.27 5.088L1.926 22H22V10h-9.661l-.326-2.932zm-3.175 6l.222 2H8v10H4.074L4.93 8zM4.78 6l-.5-2h6.439l-.5 2zM10 20v-8h10v8h-4v-4h-2v4z"></svg:path>`,
})
export class TdesignChimney1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
