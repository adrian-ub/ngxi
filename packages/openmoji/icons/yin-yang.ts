import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiYinYangIcon],svg[openmoji-yin-yang-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="36" cy="36.883" r="25" fill="#FFF"></svg:circle><svg:path fill="#3F3F3F" d="M10.883 36.883c0 13.614 10.826 24.69 24.338 25.092c-6.58-.402-11.78-5.865-11.78-12.533c0-6.933 5.614-12.559 12.559-12.559c6.932 0 12.558-5.626 12.558-12.558c0-6.668-5.211-12.131-11.792-12.533c-.251-.013-.502-.025-.766-.025s-.527 0-.779.025c-13.512.402-24.338 11.478-24.338 25.091"></svg:path><svg:circle cx="37.344" cy="48.939" r="4.019" fill="#3F3F3F"></svg:circle><svg:circle cx="37.344" cy="23.823" r="4.019" fill="#FFF"></svg:circle><svg:g fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="2"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M23.442 49.442c0 6.668 5.199 12.131 11.78 12.533c.263.012.514.025.778.025s.515-.013.766-.025c13.513-.39 24.35-11.466 24.35-25.092S50.28 12.181 36.767 11.792c6.58.402 11.792 5.865 11.792 12.533c0 6.932-5.626 12.558-12.558 12.558c-6.945 0-12.558 5.626-12.558 12.559"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M10.883 36.883c0 13.614 10.826 24.69 24.338 25.092c-6.58-.402-11.78-5.865-11.78-12.533c0-6.933 5.614-12.559 12.559-12.559c6.932 0 12.558-5.626 12.558-12.558c0-6.668-5.211-12.131-11.792-12.533c-.251-.013-.502-.025-.766-.025s-.527 0-.779.025c-13.512.402-24.338 11.478-24.338 25.091"></svg:path><svg:circle cx="37.344" cy="48.939" r="4.019"></svg:circle><svg:circle cx="37.344" cy="23.823" r="4.019"></svg:circle></svg:g>`,
})
export class OpenmojiYinYangIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
