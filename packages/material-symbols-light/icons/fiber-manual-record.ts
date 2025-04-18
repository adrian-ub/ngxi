import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightFiberManualRecordIcon],svg[material-symbols-light-fiber-manual-record-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.004 18q-2.506 0-4.255-1.745T6 12.004t1.745-4.255T11.996 6t4.255 1.745T18 11.996t-1.745 4.255T12.004 18"></svg:path>`,
})
export class MaterialSymbolsLightFiberManualRecordIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
