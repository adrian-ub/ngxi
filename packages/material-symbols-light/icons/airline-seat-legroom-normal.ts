import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightAirlineSeatLegroomNormalIcon],svg[material-symbols-light-airline-seat-legroom-normal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.942 20.423V14.5h-8q-.632 0-1.066-.434q-.434-.433-.434-1.066V3.5h5v7h4.847q.632 0 1.066.434q.434.433.434 1.066v6.73h1.807q.439 0 .7.243q.262.243.262.604t-.262.604t-.7.242zM13.866 16.5H6.058q-.69 0-1.153-.462t-.463-1.153V3.5h1v11.385q0 .23.193.423q.192.192.423.192h7.808z"></svg:path>`,
})
export class MaterialSymbolsLightAirlineSeatLegroomNormalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
