import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpCarRepairIcon],svg[ic-sharp-car-repair-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 17.01V19h7v3h2v-3h7v-1.99zM7 14h10v2h2V8.69L17.11 3H6.89L5 8.69V16h2zm2-2.5c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1m6 0c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1M8.33 5h7.34l.66 2H7.67z"></svg:path>`,
})
export class IcSharpCarRepairIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
