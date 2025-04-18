import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkExternalTransmissionIcon],svg[icon-park-external-transmission-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M30 25L42 25"></svg:path><svg:path d="M36 19L42 25L36 31"></svg:path><svg:path d="M21 6V26C21 32.7391 14.8348 39.5668 9 42"></svg:path><svg:path d="M42 14V9C42 7.34315 40.6569 6 39 6H9C7.34315 6 6 7.34315 6 9V39C6 40.6569 7.34315 42 9 42H39C40.6569 42 42 40.6569 42 39V35.5"></svg:path></svg:g>`,
})
export class IconParkExternalTransmissionIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
