import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightPriorityHighIcon],svg[material-symbols-light-priority-high-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 18.846q-.413 0-.706-.293T11 17.846t.294-.706t.706-.294t.706.294t.294.706t-.294.707t-.706.293m-.73-3.807V4.154h1.46v10.885z"></svg:path>`,
})
export class MaterialSymbolsLightPriorityHighIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
