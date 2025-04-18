import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightP2pIcon],svg[material-symbols-light-p2p-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.616 19q-.667 0-1.141-.475T3 17.386V4.615q0-.666.475-1.14T4.615 3h4.577q.667 0 1.141.475t.475 1.14v4.231h-1V6.827H4v8.346h6.808v2.212q0 .666-.475 1.14T9.193 19zm10.019 2q-.595 0-1.019-.424q-.424-.423-.424-1.018v-4.385h1v2H20V8.846h-6.808v-2.23q0-.667.475-1.141T14.807 5h4.577q.667 0 1.141.475T21 6.615v12.77q0 .666-.475 1.14t-1.14.475zm-6.48-8.27q-.31 0-.521-.21q-.211-.209-.211-.52t.21-.52t.52-.21t.521.21q.21.209.21.52t-.21.52t-.52.21m3.847 0q-.31 0-.521-.21q-.21-.209-.21-.52t.21-.52q.209-.21.52-.21t.52.21q.21.209.21.52t-.21.52q-.209.21-.52.21m3.827 0q-.31 0-.52-.21q-.21-.209-.21-.52t.209-.52t.52-.21t.521.21q.21.209.21.52t-.21.52q-.209.21-.52.21"></svg:path>`,
})
export class MaterialSymbolsLightP2pIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
