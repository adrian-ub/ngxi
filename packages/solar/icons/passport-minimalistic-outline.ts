import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarPassportMinimalisticOutlineIcon],svg[solar-passport-minimalistic-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M8.25 14a3.75 3.75 0 1 1 7.5 0a3.75 3.75 0 0 1-7.5 0M12 11.75a2.25 2.25 0 1 0 0 4.5a2.25 2.25 0 0 0 0-4.5"></svg:path><svg:path d="M18.75 4.306a2.75 2.75 0 0 0-3.139-2.722L4.814 3.126A1.82 1.82 0 0 0 3.25 5v14A3.75 3.75 0 0 0 7 22.75h10A3.75 3.75 0 0 0 20.75 19V9a3.75 3.75 0 0 0-2-3.317zM5.062 6.75H17.01A2.25 2.25 0 0 1 19.25 9v10A2.25 2.25 0 0 1 17 21.25H7A2.25 2.25 0 0 1 4.75 19V6.75zm11.95-1.5h.238v-.944a1.25 1.25 0 0 0-1.427-1.237L5.026 4.61a.321.321 0 0 0 .041.639z"></svg:path></svg:g>`,
})
export class SolarPassportMinimalisticOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
