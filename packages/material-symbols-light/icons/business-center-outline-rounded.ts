import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightBusinessCenterOutlineRoundedIcon],svg[material-symbols-light-business-center-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.616 20q-.691 0-1.153-.462T3 18.384V8.616q0-.691.463-1.153T4.615 7H9V5.615q0-.69.463-1.153T10.616 4h2.769q.69 0 1.153.462T15 5.615V7h4.385q.69 0 1.152.463T21 8.616v9.769q0 .69-.463 1.153T19.385 20zM10 7h4V5.615q0-.23-.192-.423T13.385 5h-2.77q-.23 0-.423.192T10 5.615zm10 7.5h-6v.692q0 .348-.23.578t-.578.23h-2.384q-.348 0-.578-.23t-.23-.578V14.5H4v3.885q0 .23.192.423t.423.192h14.77q.23 0 .423-.192t.192-.424zm-9 .5h2v-2h-2zm-7-1.5h6v-.692q0-.348.23-.578t.578-.23h2.384q.348 0 .578.23t.23.578v.692h6V8.616q0-.231-.192-.424T19.385 8H4.615q-.23 0-.423.192T4 8.616zm8 .5"></svg:path>`,
})
export class MaterialSymbolsLightBusinessCenterOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
