import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightSensorDoorOutlineRoundedIcon],svg[material-symbols-light-sensor-door-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.616 21q-.672 0-1.144-.472T5 19.385V4.615q0-.67.472-1.143Q5.944 3 6.616 3h10.769q.67 0 1.143.472q.472.472.472 1.144v14.769q0 .67-.472 1.143q-.472.472-1.143.472zm0-1h10.769q.269 0 .442-.173t.173-.442V4.615q0-.269-.173-.442T17.385 4H6.615q-.269 0-.442.173T6 4.616v14.769q0 .269.173.442t.443.173m8.884-7q.414 0 .707-.293T16.5 12t-.293-.707T15.5 11t-.707.293T14.5 12t.293.707t.707.293M6 4H5v16h1z"></svg:path>`,
})
export class MaterialSymbolsLightSensorDoorOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
