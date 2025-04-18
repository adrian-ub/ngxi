import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightInsertChartRoundedIcon],svg[material-symbols-light-insert-chart-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.616 20q-.691 0-1.153-.462T4 18.384V5.616q0-.691.463-1.153T5.616 4h12.769q.69 0 1.153.463T20 5.616v12.769q0 .69-.462 1.153T18.384 20zm2.614-9.5q-.213 0-.356.144T7.731 11v5q0 .213.144.356t.357.144t.356-.144T8.73 16v-5q0-.213-.144-.356q-.144-.144-.357-.144m3.77-3q-.214 0-.357.144T11.5 8v8q0 .213.144.356t.357.144t.356-.144T12.5 16V8q0-.213-.144-.356t-.357-.144m3.77 6q-.213 0-.356.144t-.144.356v2q0 .213.144.356q.144.144.357.144t.356-.144t.143-.356v-2q0-.213-.144-.356t-.356-.144"></svg:path>`,
})
export class MaterialSymbolsLightInsertChartRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
