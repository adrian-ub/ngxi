import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsCakeIcon],svg[lets-icons-cake-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m7 16l.276 1.658c.266 1.596.4 2.394.959 2.868c.56.474 1.369.474 2.987.474h1.556c1.618 0 2.428 0 2.987-.474s.693-1.272.959-2.868L17 16"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M13.5 4.5C14 3.5 15 3 16 3"></svg:path><svg:circle cx="12" cy="6" r="2" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></svg:circle><svg:path fill="currentColor" fill-rule="evenodd" d="M10 7.535a4 4 0 0 0-1.668 1.866a1 1 0 0 1-.893.6a2.5 2.5 0 1 0 1.512 4.535a1 1 0 0 1 1.076-.056c.581.33 1.253.52 1.973.52s1.392-.19 1.973-.52a1 1 0 0 1 1.076.056a2.5 2.5 0 1 0 1.512-4.535a1 1 0 0 1-.893-.6A4 4 0 0 0 14 7.535V5.341a6.02 6.02 0 0 1 3.23 2.718a4.501 4.501 0 1 1-2.81 8.433A6 6 0 0 1 12 17a6 6 0 0 1-2.42-.509A4.5 4.5 0 1 1 6.77 8.06A6.02 6.02 0 0 1 10 5.341z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class LetsIconsCakeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
