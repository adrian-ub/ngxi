import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiFamilyAdultChildIcon],svg[openmoji-family-adult-child-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="#fcea2b" stroke="#fcea2b" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:circle cx="51" cy="39" r="5"></svg:circle><svg:path d="M42 57v-3a6 6 0 0 1 6-6h6a6 6 0 0 1 6 6v3z"></svg:path><svg:circle cx="26" cy="22" r="6"></svg:circle><svg:path d="M14 57V41a8 8 0 0 1 8-8h8a8 8 0 0 1 8 8v16z"></svg:path></svg:g><svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:circle cx="51" cy="39" r="5"></svg:circle><svg:path d="M42 57v-3a6 6 0 0 1 6-6h6a6 6 0 0 1 6 6v3"></svg:path><svg:circle cx="26" cy="22" r="6"></svg:circle><svg:path d="M14 57V41a8 8 0 0 1 8-8h8a8 8 0 0 1 8 8v16"></svg:path></svg:g>`,
})
export class OpenmojiFamilyAdultChildIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
