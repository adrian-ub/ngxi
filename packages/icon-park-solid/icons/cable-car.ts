import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidCableCarIcon],svg[icon-park-solid-cable-car-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSCableCar0"><svg:g fill="none" stroke-width="4"><svg:path fill="#fff" stroke="#fff" stroke-linejoin="bevel" d="M13.28 42a2 2 0 0 1-1.816-1.162l-5.077-11a2 2 0 0 1 0-1.676l5.077-11A2 2 0 0 1 13.28 16h21.44a2 2 0 0 1 1.816 1.162l5.077 11a2 2 0 0 1 0 1.676l-5.077 11A2 2 0 0 1 34.72 42z"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M9 23h9v10H8m31-10H25v9h15"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M38 4s-9.5 3.5-17.436 4.394S8 9 8 9m18-1v8l-9-7m-6.385 10l-4.228 9.162a2 2 0 0 0 0 1.676L9 35.5"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="bevel" d="m37.385 19l4.228 9.162a2 2 0 0 1 0 1.676L39 35.5"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSCableCar0)"></svg:path>`,
})
export class IconParkSolidCableCarIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
