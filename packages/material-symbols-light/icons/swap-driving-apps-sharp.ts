import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightSwapDrivingAppsSharpIcon],svg[material-symbols-light-swap-driving-apps-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16.154 7.346l-.72-.707l1.6-1.6H7.566v-1h9.468l-1.6-1.6l.708-.72l2.82 2.82zM7.419 17.692q.481 0 .8-.314t.32-.796t-.315-.801t-.796-.32t-.801.315t-.32.797q0 .48.316.8t.796.32m9.154 0q.48 0 .8-.316t.32-.795q0-.482-.315-.801t-.796-.32t-.801.315t-.32.797q0 .48.315.8t.797.32M4 13.152h14.585L17.112 9H5.946l1.6 1.6l-.708.72L4.02 8.5l2.82-2.82l.707.72l-1.6 1.6H17.84L20 14.154V22h-1.23v-2H5.23v2H4z"></svg:path>`,
})
export class MaterialSymbolsLightSwapDrivingAppsSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
