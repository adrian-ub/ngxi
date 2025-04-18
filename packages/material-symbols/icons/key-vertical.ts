import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsKeyVerticalIcon],svg[material-symbols-key-vertical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 10q1.25 0 2.125-.875T15 7t-.875-2.125T12 4t-2.125.875T9 7t.875 2.125T12 10m.05 13L8 19l2-2l-2-2l2-2v-.35q-1.8-.625-2.9-2.175T6 7q0-2.5 1.75-4.25T12 1t4.25 1.75T18 7q0 2.025-1.15 3.538T14 12.65V21z"></svg:path>`,
})
export class MaterialSymbolsKeyVerticalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
