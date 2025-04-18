import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightElevatorIcon],svg[material-symbols-light-elevator-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.885 17.5h2v-3.808h1v-2.576q0-.633-.434-1.067t-1.066-.433h-1q-.633 0-1.067.433q-.433.434-.433 1.067v2.576h1zm1-8.808q.448 0 .752-.305t.305-.753t-.305-.752t-.753-.305t-.752.305t-.305.752q0 .449.305.753t.752.305m4.828 1.808h3.192l-1.596-2.558zm1.596 5.558l1.596-2.558h-3.192zM5.616 20q-.691 0-1.153-.462T4 18.384V5.616q0-.691.463-1.153T5.616 4h12.769q.69 0 1.153.463T20 5.616v12.769q0 .69-.462 1.153T18.384 20z"></svg:path>`,
})
export class MaterialSymbolsLightElevatorIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
