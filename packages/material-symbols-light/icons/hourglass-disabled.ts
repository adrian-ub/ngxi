import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightHourglassDisabledIcon],svg[material-symbols-light-hourglass-disabled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.11 22.53L19.579 21H5v-1h1.808v-3q0-1.91 1.097-3.238t2.564-1.724v-.096q-.934-.269-2.026-1.18T7.002 8.423L1.887 3.308l.713-.714l19.223 19.223zm-6.79-11.034l-.693-.686q1.01-.571 1.788-1.6q.777-1.03.777-2.21V4H7.808v.99l-.798-.798V4h-.193l-1-1H19v1h-1.808v3q0 1.35-.87 2.552q-.872 1.202-2.003 1.944M7.808 20h8.384v-2.386l-4.813-4.795q-1.356.206-2.463 1.312Q7.807 15.237 7.807 17zm9.384 0h1.347l-1.347-1.577z"></svg:path>`,
})
export class MaterialSymbolsLightHourglassDisabledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
