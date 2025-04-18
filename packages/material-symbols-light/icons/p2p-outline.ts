import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightP2pOutlineIcon],svg[material-symbols-light-p2p-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.616 19q-.667 0-1.141-.475T3 17.386V4.615q0-.666.475-1.14T4.615 3h4.577q.667 0 1.141.475t.475 1.14v4.231h-1V6.827H4v8.346h6.808v2.212q0 .666-.475 1.14T9.193 19zm10.019 2q-.595 0-1.019-.424q-.424-.423-.424-1.018v-4.385h1v2H20V8.846h-6.808v-2.23q0-.667.475-1.141T14.807 5h4.577q.667 0 1.141.475T21 6.615v12.77q0 .666-.475 1.14t-1.14.475zM4 16.173v1.212q0 .269.173.442t.443.173h4.576q.27 0 .442-.173q.174-.173.174-.443v-1.211zm10.192 2v1.212q0 .269.174.442q.173.173.442.173h4.577q.269 0 .442-.173t.173-.443v-1.211zM4 5.827h5.808V4.616q0-.27-.173-.443T9.192 4H4.616q-.27 0-.443.173T4 4.616zm10.192 2.02H20V6.615q0-.27-.173-.443T19.385 6h-4.577q-.27 0-.443.173t-.173.443zM8.155 12.73q-.31 0-.521-.21T7.423 12t.21-.521q.21-.21.52-.21t.521.21q.21.209.21.52t-.21.52t-.52.21m3.847 0q-.31 0-.521-.21q-.21-.209-.21-.52t.21-.52q.209-.21.52-.21t.52.21q.21.209.21.52t-.21.52q-.209.21-.52.21m3.828 0q-.31 0-.521-.21q-.21-.209-.21-.52t.209-.52t.52-.21t.521.21q.21.209.21.52t-.21.52q-.209.21-.52.21M4 16.174V18zm10.192 2V20zM4 5.827V4zm10.192 2.02V6z"></svg:path>`,
})
export class MaterialSymbolsLightP2pOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
