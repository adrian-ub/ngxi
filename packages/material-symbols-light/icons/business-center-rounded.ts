import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightBusinessCenterRoundedIcon],svg[material-symbols-light-business-center-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 15v-2h2v2zm-1-8h4V5.615q0-.23-.192-.423T13.385 5h-2.77q-.23 0-.423.192T10 5.615zM4.616 20q-.691 0-1.153-.462T3 18.384V14.5h7v.692q0 .348.23.578t.578.23h2.384q.348 0 .578-.23t.23-.578V14.5h7v3.885q0 .69-.462 1.152T19.385 20zM3 13.5V8.616q0-.691.463-1.153T4.615 7H9V5.615q0-.69.463-1.153T10.616 4h2.769q.69 0 1.153.462T15 5.615V7h4.385q.69 0 1.152.463T21 8.616V13.5h-7v-.692q0-.348-.23-.578t-.578-.23h-2.384q-.348 0-.578.23t-.23.578v.692z"></svg:path>`,
})
export class MaterialSymbolsLightBusinessCenterRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
