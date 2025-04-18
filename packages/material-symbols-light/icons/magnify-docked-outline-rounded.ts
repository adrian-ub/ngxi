import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightMagnifyDockedOutlineRoundedIcon],svg[material-symbols-light-magnify-docked-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.616 19q-.691 0-1.153-.462T3 17.384V6.616q0-.691.463-1.153T4.615 5h14.77q.69 0 1.152.463T21 6.616v10.769q0 .69-.463 1.153T19.385 19zM4 16.616v.769q0 .23.192.423t.423.192h14.77q.23 0 .423-.192t.192-.423v-.77zm0 0V18zm10.5-5.308V13q0 .214.143.357T15 13.5t.357-.143T15.5 13v-1.692h1.692q.214 0 .357-.143t.143-.357t-.143-.357t-.357-.143H15.5V8.616q0-.214-.143-.357T15 8.116t-.357.143t-.143.357v1.692h-1.692q-.214 0-.357.143t-.143.357t.143.357t.357.143zM4 15.616h16v-9q0-.27-.173-.443T19.385 6H4.615q-.269 0-.442.173T4 6.616z"></svg:path>`,
})
export class MaterialSymbolsLightMagnifyDockedOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
