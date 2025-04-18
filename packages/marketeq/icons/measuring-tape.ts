import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqMeasuringTapeIcon],svg[marketeq-measuring-tape-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M41.667 29.167h-6.25V37.5h6.25a2.083 2.083 0 0 0 2.083-2.083V31.25a2.083 2.083 0 0 0-2.083-2.083M20.833 31.25a6.25 6.25 0 1 1 0-12.5a6.25 6.25 0 0 1 0 12.5"></svg:path><svg:path stroke="#306CFE" d="M20.833 10.417A14.583 14.583 0 0 1 35.417 25v12.5a2.083 2.083 0 0 1-2.084 2.083h-12.5A14.583 14.583 0 0 1 6.25 25v0a14.583 14.583 0 0 1 14.583-14.583"></svg:path></svg:g>`,
})
export class MarketeqMeasuringTapeIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
