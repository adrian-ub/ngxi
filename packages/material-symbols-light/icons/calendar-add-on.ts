import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightCalendarAddOnIcon],svg[material-symbols-light-calendar-add-on-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.5 21.5v-3h-3v-1h3v-3h1v3h3v1h-3v3zM5.616 19q-.691 0-1.153-.462T4 17.384V6.616q0-.691.463-1.153T5.616 5h1.769V2.77h1.077V5h5.153V2.77h1V5h1.77q.69 0 1.153.463T18 6.616v5.715q-.25-.017-.5-.017t-.5.017v-1.715H5v6.769q0 .23.192.423t.423.192h6.674q0 .25.017.5t.063.5z"></svg:path>`,
})
export class MaterialSymbolsLightCalendarAddOnIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
