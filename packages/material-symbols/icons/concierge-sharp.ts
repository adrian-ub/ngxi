import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsConciergeSharpIcon],svg[material-symbols-concierge-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 13h4V2H1zm6 0h1.975L17 10V8h-4l-1.75.675l-.35-.925L13 7h9V5l-8-3l-7 1.975zm3 9h13v-2H10zm1-3h11q0-2.025-1.287-3.537T17.5 13.6v-1.625h-2V13.6q-1.95.35-3.225 1.863T11 19"></svg:path>`,
})
export class MaterialSymbolsConciergeSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
