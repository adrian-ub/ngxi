import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightMoreVertIcon],svg[material-symbols-light-more-vert-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 18.539q-.413 0-.706-.294T11 17.538t.294-.706t.706-.294t.706.294t.294.706t-.294.707t-.706.293M12 13q-.413 0-.706-.294T11 12t.294-.706T12 11t.706.294T13 12t-.294.706T12 13m0-5.538q-.413 0-.706-.294T11 6.46t.294-.706t.706-.293t.706.293t.294.707t-.294.706T12 7.46"></svg:path>`,
})
export class MaterialSymbolsLightMoreVertIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
