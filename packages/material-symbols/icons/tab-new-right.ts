import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsTabNewRightIcon],svg[material-symbols-tab-new-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m19 23l-1.4-1.4l1.575-1.6H15v-2h4.175L17.6 16.4L19 15l4 4zM5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v8.35q-.475-.175-.987-.262T18.975 13q-2.5 0-4.237 1.75T13 19q0 .525.088 1.025t.262.975zm6-4h2v-4h4v-2h-4V7h-2v4H7v2h4z"></svg:path>`,
})
export class MaterialSymbolsTabNewRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
