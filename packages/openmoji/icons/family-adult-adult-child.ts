import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiFamilyAdultAdultChildIcon],svg[openmoji-family-adult-adult-child-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="#fcea2b" stroke="#fcea2b" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M38 53V37a8 8 0 0 1 8-8h8a8 8 0 0 1 8 8v16zm-28 0V37a8 8 0 0 1 8-8h8a8 8 0 0 1 8 8v16zm24-16h4v23h-4z"></svg:path><svg:circle cx="22" cy="18" r="6"></svg:circle><svg:circle cx="50" cy="18" r="6"></svg:circle><svg:circle cx="36" cy="42" r="5"></svg:circle><svg:path d="M27 60v-3a6 6 0 0 1 6-6h6a6 6 0 0 1 6 6v3z"></svg:path></svg:g><svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:circle cx="36" cy="42" r="5"></svg:circle><svg:circle cx="22" cy="18" r="6"></svg:circle><svg:path d="M10 53V37a8 8 0 0 1 8-8h8a8 8 0 0 1 7.173 4.453"></svg:path><svg:circle cx="50" cy="18" r="6"></svg:circle><svg:path d="M27 60v-3a6 6 0 0 1 6-6h6a6 6 0 0 1 6 6v3m-6.173-26.547A8 8 0 0 1 46 29h8a8 8 0 0 1 8 8v16"></svg:path></svg:g>`,
})
export class OpenmojiFamilyAdultAdultChildIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
