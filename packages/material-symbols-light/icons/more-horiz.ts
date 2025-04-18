import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightMoreHorizIcon],svg[material-symbols-light-more-horiz-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.462 13q-.413 0-.707-.294T5.462 12t.293-.706t.707-.294t.706.294t.293.706t-.293.706T6.46 13M12 13q-.413 0-.706-.294T11 12t.294-.706T12 11t.706.294T13 12t-.294.706T12 13m5.539 0q-.413 0-.707-.294T16.538 12t.294-.706t.706-.294t.707.294t.293.706t-.293.706t-.707.294"></svg:path>`,
})
export class MaterialSymbolsLightMoreHorizIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
