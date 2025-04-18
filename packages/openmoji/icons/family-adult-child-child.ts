import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiFamilyAdultChildChildIcon],svg[openmoji-family-adult-child-child-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="#fcea2b" stroke="#fcea2b" stroke-width="2"><svg:path stroke-miterlimit="10" d="M24 61V34a8 8 0 0 1 8-8h8a8 8 0 0 1 8 8v27z"></svg:path><svg:circle cx="36" cy="15" r="6" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:g stroke-linecap="round" stroke-linejoin="round"><svg:circle cx="25" cy="43" r="5"></svg:circle><svg:circle cx="47" cy="43" r="5"></svg:circle><svg:path d="M16 61v-3a6 6 0 0 1 6-6h6a6 6 0 0 1 6 6v3zm22 0v-3a6 6 0 0 1 6-6h6a6 6 0 0 1 6 6v3z"></svg:path></svg:g></svg:g><svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:circle cx="36" cy="15" r="6"></svg:circle><svg:circle cx="25" cy="43" r="5"></svg:circle><svg:circle cx="47" cy="43" r="5"></svg:circle><svg:path d="M16 61v-3a6 6 0 0 1 6-6h6a6 6 0 0 1 6 6v3m4 0v-3a6 6 0 0 1 6-6h6a6 6 0 0 1 6 6v3M24 34a8 8 0 0 1 8-8h8a8 8 0 0 1 8 8"></svg:path></svg:g>`,
})
export class OpenmojiFamilyAdultChildChildIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
