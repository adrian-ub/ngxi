import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilTruckOffIcon],svg[pepicons-pencil-truck-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M5.5 16.5a2 2 0 1 0 4 0a2 2 0 0 0-4 0m3 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0m6 0a2 2 0 1 0 4 0a2 2 0 0 0-4 0m3 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M17 4.5H9a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-7a2 2 0 0 0-2-2m-9 2a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1z" clip-rule="evenodd"></svg:path><svg:path d="M10.25 8.5a.5.5 0 0 1 0-1h5.5a.5.5 0 0 1 0 1zm0 2a.5.5 0 0 1 0-1h5.5a.5.5 0 0 1 0 1zm0 2a.5.5 0 0 1 0-1h5.5a.5.5 0 0 1 0 1z"></svg:path><svg:path fill-rule="evenodd" d="M6 7.5H2.71A2 2 0 0 0 .8 8.91L0 11.5v2a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2m-5 6v-1.85l.755-2.445A1 1 0 0 1 2.71 8.5H6a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M4.5 9.6H2.79a.5.5 0 0 0-.484.378l-.29 1.15L2 11.25v.85a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-.5-.5m-1.5 2v-.288l.18-.712H4v1z" clip-rule="evenodd"></svg:path><svg:path d="M1.15 1.878a.514.514 0 0 1 .728-.727l16.971 16.971a.514.514 0 0 1-.727.727z"></svg:path></svg:g>`,
})
export class PepiconsPencilTruckOffIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
