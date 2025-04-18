import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightPriorityHighRoundedIcon],svg[material-symbols-light-priority-high-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 18.846q-.413 0-.706-.293T11 17.846t.294-.706t.706-.294t.706.294t.294.706t-.294.707t-.706.293m-.003-3.807q-.303 0-.515-.215t-.213-.516V4.885q0-.302.216-.516t.518-.215t.515.215t.213.516v9.423q0 .301-.216.516q-.215.215-.518.215"></svg:path>`,
})
export class MaterialSymbolsLightPriorityHighRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
