import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightLocalPostOfficeOutlineIcon],svg[material-symbols-light-local-post-office-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 18v2.23q0 .31-.23.54t-.54.23H3.77q-.31 0-.54-.23T3 20.23v-6.46q0-.31.23-.54t.54-.23H7V8q0-2.077 1.462-3.538T12 3h4q2.077 0 3.539 1.462T21 8v13h-1v-3zm0-1h5V8q0-1.65-1.175-2.825T16 4h-4q-1.65 0-2.825 1.175T8 8v5h6.23q.31 0 .54.23t.23.54zm-4.5-7.5v-1h7v1zM9 16.85L14 14H4zm0 1.02l-5-2.85V20h10v-4.98zM4 14v6z"></svg:path>`,
})
export class MaterialSymbolsLightLocalPostOfficeOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
