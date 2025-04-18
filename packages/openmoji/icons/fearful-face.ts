import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiFearfulFaceIcon],svg[openmoji-fearful-face-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:path id="openmojiFearfulFace0" d="M42.847 45.658c0-2.592-3.834-4.694-6.869-4.694s-6.869 2.101-6.869 4.694s3.66.925 6.694.925s7.044 1.667 7.044-.925"></svg:path></svg:defs><svg:use href="#openmojiFearfulFace0"></svg:use><svg:path fill="#fcea2b" d="M35.977 12.958a23 23 0 1 0 23 23a23.026 23.026 0 0 0-23-23"></svg:path><svg:path fill="#92d3f5" d="M35.977 24.769a23.04 23.04 0 0 1 22.228 17.095a23 23 0 1 0-44.456 0a23.04 23.04 0 0 1 22.228-17.095"></svg:path><svg:use href="#openmojiFearfulFace0"></svg:use><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M29.356 22.669a8.44 8.44 0 0 0-9.065 4.498m31.373 0a8.44 8.44 0 0 0-9.066-4.498"></svg:path><svg:circle cx="35.977" cy="35.958" r="23" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="2"></svg:circle><svg:path fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="2" d="M42.847 45.658c0-2.592-3.834-4.694-6.869-4.694s-6.869 2.101-6.869 4.694s3.66.925 6.694.925s7.044 1.667 7.044-.925Z"></svg:path><svg:path d="M29.977 32.958a3 3 0 1 1-3-3a3 3 0 0 1 3 3m18 0a3 3 0 1 1-3-3a3 3 0 0 1 3 3"></svg:path>`,
})
export class OpenmojiFearfulFaceIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
