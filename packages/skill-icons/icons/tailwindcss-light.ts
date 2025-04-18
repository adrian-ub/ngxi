import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[skillIconsTailwindcssLightIcon],svg[skill-icons-tailwindcss-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:rect width="256" height="256" fill="#F4F2ED" rx="60"></svg:rect><svg:path fill="url(#skillIconsTailwindcssLight0)" fill-rule="evenodd" d="M83 110q9-36 45-36c36 0 40.5 27 58.5 31.5q18 4.502 31.5-13.5q-9 36-45 36c-36 0-40.5-27-58.5-31.5Q96.5 92 83 110m-45 54q9-36 45-36c36 0 40.5 27 58.5 31.5q18 4.502 31.5-13.5q-9 36-45 36c-36 0-40.5-27-58.5-31.5q-18-4.502-31.5 13.5" clip-rule="evenodd"></svg:path><svg:defs><svg:lineargradient id="skillIconsTailwindcssLight0" x1="86.5" x2="163.5" y1="74" y2="185.5" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#32B1C1"></svg:stop><svg:stop offset="1" stop-color="#14C6B7"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class SkillIconsTailwindcssLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
