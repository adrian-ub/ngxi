import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSubscriptionsOutlineSharpIcon],svg[material-symbols-subscriptions-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 22V8h20v14zm2-2h16V10H4zm6-1l6-4l-6-4zM4 7V5h16v2zm3-3V2h10v2zM4 20V10z"></svg:path>`,
})
export class MaterialSymbolsSubscriptionsOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
