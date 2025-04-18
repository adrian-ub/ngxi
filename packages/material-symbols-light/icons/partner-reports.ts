import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightPartnerReportsIcon],svg[material-symbols-light-partner-reports-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 16.616q-.29 0-.491-.201t-.201-.492t.2-.491q.202-.201.492-.201t.491.2t.201.492t-.2.492t-.492.2m-.5-3.769V4h1v8.846zM5.616 20q-.691 0-1.153-.462T4 18.384v-2.423h1v2.423q0 .231.192.424t.423.192h12.77q.23 0 .423-.192t.192-.424v-2.423h1v2.423q0 .691-.462 1.153T18.384 20z"></svg:path>`,
})
export class MaterialSymbolsLightPartnerReportsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
