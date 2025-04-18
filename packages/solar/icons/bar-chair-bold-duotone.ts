import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarBarChairBoldDuotoneIcon],svg[solar-bar-chair-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5.46 6.733a4 4 0 0 1 3.294-4.425l.373-.064a17 17 0 0 1 5.745 0l.373.064a4 4 0 0 1 3.295 4.425l-.017.14a1 1 0 0 1-.992.879H6.469a1 1 0 0 1-.993-.88z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M8.233 7.752L5.267 21.595a.75.75 0 0 0 1.467.314l.944-4.407h8.644l.945 4.407a.75.75 0 0 0 1.467-.314L15.766 7.752H14.25q0 .078.017.157L16 16.002H7.999l1.735-8.093a1 1 0 0 0 .016-.157z" opacity=".5"></svg:path>`,
})
export class SolarBarChairBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
