import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsTabNewRightSharpIcon],svg[material-symbols-tab-new-right-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m19 23l-1.4-1.4l1.575-1.6H15v-2h4.175L17.6 16.4L19 15l4 4zM3 21V3h18v10.35q-.475-.175-.987-.262T18.975 13q-2.5 0-4.237 1.75T13 19q0 .525.088 1.025t.262.975zm8-4h2v-4h4v-2h-4V7h-2v4H7v2h4z"></svg:path>`,
})
export class MaterialSymbolsTabNewRightSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
