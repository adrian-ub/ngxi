import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightExplicitRoundedIcon],svg[material-symbols-light-explicit-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.5 15.5v-3H14q.213 0 .356-.144t.144-.357t-.144-.356T14 11.5h-3.5v-3H14q.213 0 .356-.144t.144-.357t-.144-.356T14 7.5h-4q-.213 0-.356.144T9.5 8v8q0 .213.144.356T10 16.5h4q.213 0 .356-.144t.144-.357t-.144-.356T14 15.5zM5.616 20q-.691 0-1.153-.462T4 18.384V5.616q0-.691.463-1.153T5.616 4h12.769q.69 0 1.153.463T20 5.616v12.769q0 .69-.462 1.153T18.384 20z"></svg:path>`,
})
export class MaterialSymbolsLightExplicitRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
