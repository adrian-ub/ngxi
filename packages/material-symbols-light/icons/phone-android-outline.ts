import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightPhoneAndroidOutlineIcon],svg[material-symbols-light-phone-android-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.23 19.654h3.54v-.77h-3.54zM7.617 22q-.691 0-1.153-.462T6 20.385V3.615q0-.69.463-1.152T7.616 2h8.769q.69 0 1.152.463T18 3.616v16.769q0 .69-.462 1.153T16.384 22zM7 17.538v2.846q0 .231.192.424t.423.192h8.77q.23 0 .423-.192t.192-.424v-2.846zm0-1h10V5.5H7zM7 4.5h10v-.885q0-.23-.192-.423T16.384 3H7.616q-.231 0-.424.192T7 3.616zm0 13.039V21zM7 4.5V3z"></svg:path>`,
})
export class MaterialSymbolsLightPhoneAndroidOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
