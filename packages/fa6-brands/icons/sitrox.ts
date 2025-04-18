import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fa6BrandsSitroxIcon],svg[fa6-brands-sitrox-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M212.439.008V0H448v128H64C64 57.6 141.755.475 212.439.008M237.256 192v.007C307.135 192.475 384 249.6 384 320H210.809v-.005C140.915 319.563 64 262.424 64 192zm-1.691 319.993C306.251 511.521 384 454.399 384 384H0v128h235.565z"></svg:path>`,
})
export class Fa6BrandsSitroxIcon {
  readonly viewBox = input("0 0 448 512")
  readonly width = input("0.88em")
  readonly height = input("1em")
}
