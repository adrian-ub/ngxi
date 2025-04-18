import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidHeaterResistorIcon],svg[icon-park-solid-heater-resistor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSHeaterResistor0"><svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:rect width="28" height="12" x="9.858" y="29.657" fill="#fff" stroke="#fff" rx="2" transform="rotate(-45 9.858 29.657)"></svg:rect><svg:path stroke="#fff" stroke-linecap="round" d="m7.03 40.97l7.07-7.07m19.801-19.8l7.071-7.07"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="m14.808 24.707l8.485 8.485m-3.535-13.435l8.485 8.486m-3.536-13.435l8.485 8.485"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="m12.687 26.829l14.142-14.142m-5.657 22.627l14.142-14.142"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSHeaterResistor0)"></svg:path>`,
})
export class IconParkSolidHeaterResistorIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
