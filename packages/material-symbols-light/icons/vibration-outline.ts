import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightVibrationOutlineIcon],svg[material-symbols-light-vibration-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1.462 14.5v-5h1v5zm2.769 2v-9h1v9zm17.307-2v-5h1v5zm-2.769 2v-9h1v9zM8.616 20q-.672 0-1.144-.472T7 18.385V5.615q0-.67.472-1.143Q7.944 4 8.616 4h6.769q.67 0 1.143.472q.472.472.472 1.144v12.769q0 .67-.472 1.143q-.472.472-1.143.472zm0-1h6.769q.269 0 .442-.173t.173-.442V5.615q0-.269-.173-.442T15.385 5h-6.77q-.269 0-.442.173T8 5.616v12.769q0 .269.173.442t.443.173M8 19V5z"></svg:path>`,
})
export class MaterialSymbolsLightVibrationOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
