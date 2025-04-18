import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightVibrationOutlineRoundedIcon],svg[material-symbols-light-vibration-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1.962 9.5q.213 0 .356.144t.143.356v4q0 .213-.143.356q-.144.144-.357.144t-.356-.144T1.462 14v-4q0-.213.144-.356t.356-.144m2.77-2q.212 0 .356.144T5.23 8v8q0 .213-.144.356q-.144.144-.357.144t-.356-.144T4.231 16V8q0-.213.144-.356T4.73 7.5m17.308 2q.213 0 .356.144t.144.356v4q0 .213-.145.356t-.356.144t-.356-.144t-.143-.356v-4q0-.213.143-.356q.144-.144.357-.144m-2.769-2q.213 0 .356.144t.143.356v8q0 .213-.144.356t-.356.144t-.356-.144t-.144-.356V8q0-.213.144-.356q.144-.144.357-.144M8.616 20q-.667 0-1.141-.475T7 18.386V5.615q0-.666.475-1.14T8.615 4h6.77q.666 0 1.14.475T17 5.615v12.77q0 .666-.475 1.14t-1.14.475zm0-1h6.769q.269 0 .442-.173t.173-.442V5.615q0-.269-.173-.442T15.385 5h-6.77q-.269 0-.442.173T8 5.616v12.769q0 .269.173.442t.443.173M8 19V5z"></svg:path>`,
})
export class MaterialSymbolsLightVibrationOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
