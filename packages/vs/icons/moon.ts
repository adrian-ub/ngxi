import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vsMoonIcon],svg[vs-moon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1464 1090q-94 203-283 323.5T768 1536q-157-1-299-62t-244.5-163.5T61 1066T0 768q0-205 97.5-378t267-276.5T738 2q43-2 62 38q17 42-16 72q-176 164-176 400q0 111 43 211.5t115 173t172.5 116T1151 1056q119 0 228-51q41-18 72 13t13 72"></svg:path>`,
})
export class VsMoonIcon {
  readonly viewBox = input("0 0 1472 1536")
  readonly width = input("0.96em")
  readonly height = input("1em")
}
