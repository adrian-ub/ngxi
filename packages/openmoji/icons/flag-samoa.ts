import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiFlagSamoaIcon],svg[openmoji-flag-samoa-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#d22f27" d="M5 17h62v38H5z"></svg:path><svg:path fill="#1e50a0" d="M5 17h32v21H5z"></svg:path><svg:path fill="#fff" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="m20.081 24.089l1.232-4l1.24 3.998l-3.238-2.469l4-.003zm0 11.882l1.232-4l1.24 3.998l-3.238-2.469l4-.003zm6.5-8.5l1.232-4l1.24 3.998L25.815 25l4-.003zm-13 0l1.232-4l1.24 3.998L12.815 25l4-.003z"></svg:path><svg:circle cx="24.75" cy="30" r=".5" fill="#fff"></svg:circle><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 17h62v38H5z"></svg:path>`,
})
export class OpenmojiFlagSamoaIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
