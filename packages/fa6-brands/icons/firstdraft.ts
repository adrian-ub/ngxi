import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fa6BrandsFirstdraftIcon],svg[fa6-brands-firstdraft-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M384 192h-64v128H192v128H0v-25.6h166.4v-128h128v-128H384zm-25.6 38.4v128h-128v128H64V512h192V384h128V230.4zm25.6 192h-89.6V512H320v-64h64zM0 0v384h128V256h128V128h128V0z"></svg:path>`,
})
export class Fa6BrandsFirstdraftIcon {
  readonly viewBox = input("0 0 384 512")
  readonly width = input("0.75em")
  readonly height = input("1em")
}
