import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiFaceSavoringFoodIcon],svg[openmoji-face-savoring-food-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="36" cy="36" r="24" fill="#FCEA2B"></svg:circle><svg:path fill="#EA5A47" d="M50.57 44.471s6.387 4.21 6.387 7.624c0 2.467-1.575 4.51-4.272 4.51c-3.721 0-7.684-6.244-7.684-6.244"></svg:path><svg:g fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="2"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M57.25 44.814A22.9 22.9 0 0 0 59 36c0-12.703-10.298-23-23-23S13 23.297 13 36s10.297 23 23 23c3.37 0 6.572-.725 9.457-2.028"></svg:path><svg:path stroke-linecap="round" d="M31.694 33.404a4.726 4.726 0 0 0-8.638 0m25.888 0a4.726 4.726 0 0 0-8.638 0"></svg:path><svg:path d="M50.57 44.471s6.387 4.21 6.387 7.624c0 2.467-1.575 4.51-4.272 4.51c-3.721 0-7.684-6.244-7.684-6.244"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M20.166 41.358C22.398 47.959 28.644 52.712 36 52.712s13.602-4.754 15.835-11.356"></svg:path></svg:g>`,
})
export class OpenmojiFaceSavoringFoodIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
