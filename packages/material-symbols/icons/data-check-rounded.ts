import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsDataCheckRoundedIcon],svg[material-symbols-data-check-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.3 8.825L14.225 7.75q-.15-.15-.35-.137t-.35.162t-.15.35t.15.35L14.6 9.55q.3.3.7.3t.7-.3l2.475-2.5q.15-.15.15-.35t-.15-.35t-.35-.15t-.35.15zM4 20q-.425 0-.712-.288T3 19t.288-.712T4 18h10q.425 0 .713.288T15 19t-.288.713T14 20zm12-7q-2.075 0-3.537-1.463T11 8t1.463-3.537T16 3t3.538 1.463T21 8t-1.463 3.538T16 13M4 12q-.425 0-.712-.288T3 11t.288-.712T4 10h4.675q.425 0 .713.288t.287.712q0 .4-.288.7t-.712.3zm0 4q-.425 0-.712-.288T3 15t.288-.712T4 14h7.925q.425 0 .713.288t.287.712q0 .4-.275.7t-.725.3z"></svg:path>`,
})
export class MaterialSymbolsDataCheckRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
