import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightSafetyDividerIcon],svg[material-symbols-light-safety-divider-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.5 18.5v-13h1v13zm-10-3v-.171q0-.427.248-.764q.248-.336.67-.528q.592-.276 1.24-.406Q4.309 13.5 5 13.5t1.341.13q.65.132 1.242.407q.42.192.669.528q.248.337.248.764v.171zm14 0v-.171q0-.427.248-.764q.248-.336.67-.528q.592-.276 1.24-.406q.65-.131 1.342-.131t1.341.13q.65.132 1.242.407q.42.192.669.528q.248.337.248.764v.171zM5 11.5q-.633 0-1.066-.434Q3.5 10.633 3.5 10t.434-1.066T5 8.5t1.066.434Q6.5 9.367 6.5 10t-.434 1.066T5 11.5m14 0q-.633 0-1.066-.434Q17.5 10.633 17.5 10t.434-1.066T19 8.5t1.066.434q.434.433.434 1.066t-.434 1.066T19 11.5"></svg:path>`,
})
export class MaterialSymbolsLightSafetyDividerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
