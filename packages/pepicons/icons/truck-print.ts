import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsTruckPrintIcon],svg[pepicons-truck-print-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M9 6h9a2 2 0 0 1 2 2v7a2 2 0 0 1-.906 1.675a2.25 2.25 0 1 1-4.288.325h-4.612a2.25 2.25 0 1 1-4.388 0H3a2 2 0 0 1-2-2v-2l.8-2.59A2 2 0 0 1 3.71 9H7V8a2 2 0 0 1 2-2Z" clip-rule="evenodd" opacity=".8"></svg:path><svg:path fill-rule="evenodd" d="M5.5 16.5a2 2 0 1 0 4 0a2 2 0 0 0-4 0Zm3 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0Zm6 0a2 2 0 1 0 4 0a2 2 0 0 0-4 0Zm3 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0Z" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M17 4.5H9a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-7a2 2 0 0 0-2-2Zm-9 2a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-7Z" clip-rule="evenodd"></svg:path><svg:path d="M10.25 8.5a.5.5 0 0 1 0-1h5.5a.5.5 0 0 1 0 1h-5.5Zm0 2a.5.5 0 0 1 0-1h5.5a.5.5 0 0 1 0 1h-5.5Zm0 2a.5.5 0 0 1 0-1h5.5a.5.5 0 0 1 0 1h-5.5Z"></svg:path><svg:path fill-rule="evenodd" d="M6 7.5H2.71A2 2 0 0 0 .8 8.91L0 11.5v2a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2Zm-5 6v-1.85l.755-2.445A1 1 0 0 1 2.71 8.5H6a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1Z" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M4.5 9.6H2.79a.5.5 0 0 0-.484.378l-.29 1.15L2 11.25v.85a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-.5-.5Zm-1.5 2v-.288l.18-.712H4v1H3Z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsTruckPrintIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
