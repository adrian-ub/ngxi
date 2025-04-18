import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightLooks4RoundedIcon],svg[material-symbols-light-looks-4-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.5 12.5V16q0 .213.144.356t.357.144t.356-.144T14.5 16V8q0-.213-.144-.356t-.357-.144t-.356.144T13.5 8v3.5h-3V8q0-.213-.144-.356T9.999 7.5t-.356.144T9.5 8v3.692q0 .343.232.576t.576.232zM5.616 20q-.691 0-1.153-.462T4 18.384V5.616q0-.691.463-1.153T5.616 4h12.769q.69 0 1.153.463T20 5.616v12.769q0 .69-.462 1.153T18.384 20z"></svg:path>`,
})
export class MaterialSymbolsLightLooks4RoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
