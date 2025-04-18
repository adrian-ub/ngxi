import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidWashingMachineIcon],svg[icon-park-solid-washing-machine-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:rect width="32" height="40" x="8.778" y="4" stroke="currentColor" stroke-width="4" rx="2"></svg:rect><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M8.778 15.5h32"></svg:path><svg:circle cx="28.778" cy="10" r="2" fill="currentColor"></svg:circle><svg:circle cx="34.778" cy="10" r="2" fill="currentColor"></svg:circle><svg:circle cx="24.778" cy="30" r="7" fill="currentColor" stroke="currentColor" stroke-width="4"></svg:circle></svg:g>`,
})
export class IconParkSolidWashingMachineIcon {
  readonly viewBox = input("0 0 49 48")
  readonly width = input("1.03em")
  readonly height = input("1em")
}
