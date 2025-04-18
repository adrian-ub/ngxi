import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fa6BrandsBuromobelexperteIcon],svg[fa6-brands-buromobelexperte-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 32v128h128V32zm120 120H8V40h112zm40-120v128h128V32zm120 120H168V40h112zm40-120v128h128V32zm120 120H328V40h112zM0 192v128h128V192zm120 120H8V200h112zm40-120v128h128V192zm120 120H168V200h112zm40-120v128h128V192zm120 120H328V200h112zM0 352v128h128V352zm120 120H8V360h112zm40-120v128h128V352zm120 120H168V360h112zm40-120v128h128V352z"></svg:path>`,
})
export class Fa6BrandsBuromobelexperteIcon {
  readonly viewBox = input("0 0 448 512")
  readonly width = input("0.88em")
  readonly height = input("1em")
}
