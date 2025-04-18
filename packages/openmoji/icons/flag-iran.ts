import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiFlagIranIcon],svg[openmoji-flag-iran-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#d22f27" d="M5 17h62v38H5z"></svg:path><svg:path fill="#5c9e31" d="M5 17h62v13H5z"></svg:path><svg:path fill="#fff" d="M5 30h62v12H5z"></svg:path><svg:path fill="none" stroke="#d22f27" stroke-linecap="round" stroke-linejoin="round" d="M36 32v8m2-8a4 4 0 0 1 0 8"></svg:path><svg:path fill="none" stroke="#d22f27" stroke-linecap="round" stroke-linejoin="round" d="M36 40a4 4 0 0 0 1.229-6.768M36 40a4 4 0 0 1-1.228-6.768"></svg:path><svg:path fill="none" stroke="#d22f27" stroke-linecap="round" stroke-linejoin="round" d="M34 32a4 4 0 0 0 0 8"></svg:path><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 17h62v38H5z"></svg:path>`,
})
export class OpenmojiFlagIranIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
