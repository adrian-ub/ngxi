import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightCalendarClockSharpIcon],svg[material-symbols-light-calendar-clock-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 21V5h3.385V2.77h1.077V5h7.154V2.77h1V5H20v6.867q-.244-.09-.494-.134T19 11.652v-1.036H5V20h7.32q.078.28.2.521q.122.24.255.479zm14.385 1q-1.671 0-2.836-1.164Q14.385 19.67 14.385 18t1.164-2.835T18.384 14t2.836 1.165T22.385 18t-1.165 2.836T18.385 22m1.655-1.798l.546-.546l-1.817-1.821v-2.72H18v3.047z"></svg:path>`,
})
export class MaterialSymbolsLightCalendarClockSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
