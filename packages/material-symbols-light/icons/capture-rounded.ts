import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightCaptureRoundedIcon],svg[material-symbols-light-capture-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.616 19q-.691 0-1.153-.462T3 17.384V6.616q0-.691.463-1.153T4.615 5h14.77q.69 0 1.152.463T21 6.616v10.769q0 .69-.463 1.153T19.385 19zM7 15.808h10q.348 0 .578-.23t.23-.578V9q0-.348-.23-.578T17 8.192H7q-.348 0-.578.23T6.192 9v6q0 .348.23.578t.578.23"></svg:path>`,
})
export class MaterialSymbolsLightCaptureRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
