import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bubblesPluginScoresBasicSolidIcon],svg[bubbles-plugin-scores-basic-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M16.843 1.704a1.1 1.1 0 0 0-.484.016L5.043 5.393H17.73V2.785a1.104 1.104 0 0 0-.888-1.081m2.564 3.69V2.785A2.8 2.8 0 0 0 18.314.569A2.76 2.76 0 0 0 15.863.11L2.347 4.5a2.77 2.77 0 0 0-1.448.992a2.8 2.8 0 0 0-.566 1.686v20.256a2.8 2.8 0 0 0 1.093 2.216q.14.105.298.146a.83.83 0 0 0 .548.205h18.624c.735 0 1.44-.293 1.96-.816c.519-.522.81-1.23.81-1.97V8.18a2.8 2.8 0 0 0-.811-1.97a2.76 2.76 0 0 0-1.96-.816zM2.449 28.315h18.447a1.1 1.1 0 0 0 1.095-1.101V8.179c0-.292-.115-.572-.32-.779a1.1 1.1 0 0 0-.775-.323H2.013a1 1 0 0 0-.004.1v20.256a1.1 1.1 0 0 0 .44.883"></svg:path><svg:path d="M9.268 13c.327 0 .625.193.76.493l3.465 7.663a.84.84 0 0 1-.414 1.111a.833.833 0 0 1-1.106-.417l-2.705-5.982l-2.705 5.982a.833.833 0 0 1-1.106.417a.84.84 0 0 1-.414-1.111l3.465-7.663a.84.84 0 0 1 .76-.492"></svg:path><svg:path d="M5.913 19.413c0-.463.374-.839.835-.839h5.04c.46 0 .835.376.835.84s-.374.839-.835.839h-5.04a.837.837 0 0 1-.835-.84m8.001-2.09c0-.463.373-.84.834-.84h4.159c.46 0 .835.377.835.84c0 .464-.374.84-.835.84h-4.159a.837.837 0 0 1-.834-.84"></svg:path><svg:path d="M16.827 14.394c.461 0 .835.376.835.84v4.18a.836.836 0 0 1-.835.838a.837.837 0 0 1-.835-.839v-4.18c0-.463.374-.839.835-.839"></svg:path></svg:g>`,
})
export class BubblesPluginScoresBasicSolidIcon {
  readonly viewBox = input("0 0 24 30")
  readonly width = input("0.8em")
  readonly height = input("1em")
}
