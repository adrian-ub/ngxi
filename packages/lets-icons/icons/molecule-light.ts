import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsMoleculeLightIcon],svg[lets-icons-molecule-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:circle cx="12" cy="12" r="2.5"></svg:circle><svg:path stroke-linejoin="round" d="m10 14l-3.5 3.5m4-7L6 6"></svg:path><svg:circle cx="17" cy="17" r="1.5"></svg:circle><svg:circle cx="20" cy="12" r="1.5"></svg:circle><svg:path stroke-linejoin="round" d="M18.5 12h-4m-.5 2l2 2"></svg:path><svg:circle cx="19" cy="5" r="2.5"></svg:circle><svg:path stroke-linejoin="round" d="m17 7l-3 3"></svg:path><svg:circle cx="5" cy="5" r="1.5"></svg:circle><svg:circle cx="5" cy="19" r="2.5"></svg:circle></svg:g>`,
})
export class LetsIconsMoleculeLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
