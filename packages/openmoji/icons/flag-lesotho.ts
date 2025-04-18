import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiFlagLesothoIcon],svg[openmoji-flag-lesotho-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#5c9e31" d="M5 17h62v38H5z"></svg:path><svg:path fill="#fff" d="M5 30h62v12H5z"></svg:path><svg:path fill="#1e50a0" d="M5 17h62v13H5z"></svg:path><svg:g stroke="#000" stroke-linecap="round" stroke-linejoin="round"><svg:path d="m36 34.75l-3.464 6h6.928z"></svg:path><svg:ellipse cx="36" cy="34.25" fill="none" rx="2" ry="3"></svg:ellipse><svg:path fill="none" d="M36 31.25v6m-1.5-3.5h3"></svg:path></svg:g><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 17h62v38H5z"></svg:path>`,
})
export class OpenmojiFlagLesothoIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
