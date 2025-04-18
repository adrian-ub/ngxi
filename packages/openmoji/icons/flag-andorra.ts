import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiFlagAndorraIcon],svg[openmoji-flag-andorra-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#fcea2b" d="M5 17h62v38H5z"></svg:path><svg:path fill="#1e50a0" d="M5 17h21v38H5z"></svg:path><svg:path fill="#d22f27" d="M46 17h21v38H46zm-4 15.154V44a2.006 2.006 0 0 1-2 2h-8a2.006 2.006 0 0 1-2-2V32.154"></svg:path><svg:path fill="#f1b31c" d="M36 32.154h6v6.154h-6zm-6 6.154h6V46h-6z"></svg:path><svg:ellipse cx="36" cy="38.308" fill="#6a462f" rx="2.25" ry="2.308"></svg:ellipse><svg:path fill="none" stroke="#6a462f" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M30 27.539A12.6 12.6 0 0 1 36 26m6 1.539A12.6 12.6 0 0 0 36 26m-6 6.154h12m0 0V44a2.006 2.006 0 0 1-2 2h-8a2.006 2.006 0 0 1-2-2V32.154"></svg:path><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 17h62v38H5z"></svg:path>`,
})
export class OpenmojiFlagAndorraIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
