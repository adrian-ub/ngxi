import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[deviconPlainAngularmaterialIcon],svg[devicon-plain-angularmaterial-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M63.934.656L5.25 21.66l8.863 77.719l49.82 27.77l49.887-27.77l9.059-77.719zm-8.83 30.96l40.738 19.57L72.77 65.27L32.285 45.697zm-9.776 21.497l27.496 13.295l.233-.14l9.658-5.897l13.123 6.305l-23.07 14.017l-40.483-19.57zm.024 15.438l27.472 13.28l.233-.142l9.681-5.882l13.102 6.295l-23.072 14.017l-40.48-19.506z"></svg:path>`,
})
export class DeviconPlainAngularmaterialIcon {
  readonly viewBox = input("0 0 128 128")
  readonly width = input("1em")
  readonly height = input("1em")
}
