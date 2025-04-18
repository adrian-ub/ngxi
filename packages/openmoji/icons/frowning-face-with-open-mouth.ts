import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiFrowningFaceWithOpenMouthIcon],svg[openmoji-frowning-face-with-open-mouth-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#FCEA2B" d="M36 13c-12.682 0-23 10.318-23 23s10.318 23 23 23s23-10.318 23-23s-10.318-23-23-23"></svg:path><svg:circle cx="36" cy="36" r="23" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="2"></svg:circle><svg:path stroke="#000" stroke-miterlimit="10" stroke-width="2" d="M42.87 45.7c0-2.592-3.834-4.694-6.869-4.694s-6.869 2.101-6.869 4.694s3.659.925 6.694.925s7.044 1.667 7.044-.925z"></svg:path><svg:path d="M30 31a3.001 3.001 0 0 1-6 0c0-1.655 1.345-3 3-3s3 1.345 3 3m18 0a3.001 3.001 0 0 1-6 0c0-1.655 1.345-3 3-3s3 1.345 3 3"></svg:path>`,
})
export class OpenmojiFrowningFaceWithOpenMouthIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
