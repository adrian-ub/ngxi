import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightPackageRoundedIcon],svg[material-symbols-light-package-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.616 20q-.691 0-1.153-.462T4 18.384V5.616q0-.691.463-1.153T5.616 4h12.769q.69 0 1.153.463T20 5.616v12.769q0 .69-.462 1.153T18.384 20zm4.142-8.417L12 10.462l2.242 1.12q.27.135.514-.017t.244-.44V5H9v6.125q0 .287.244.44q.244.152.514.018M7.5 16.5h4q.214 0 .357-.143T12 16t-.143-.357t-.357-.143h-4q-.213 0-.357.143T7 16t.143.357t.357.143"></svg:path>`,
})
export class MaterialSymbolsLightPackageRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
