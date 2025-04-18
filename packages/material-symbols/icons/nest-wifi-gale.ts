import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsNestWifiGaleIcon],svg[material-symbols-nest-wifi-gale-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.6 10h18.8l-.275-4.125q-.05-.8-.625-1.338T19.125 4H4.875q-.8 0-1.375.537t-.625 1.338L2.6 10Zm1.55 9h.525L5 20h14l.325-1h.525q.875 0 1.462-.625t.538-1.5L21.525 12H2.475l-.325 4.875q-.05.875.537 1.5T4.15 19Z"></svg:path>`,
})
export class MaterialSymbolsNestWifiGaleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
