import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerHomeLinkIcon],svg[tabler-home-link-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M20.085 11.085L12 3l-9 9h2v7a2 2 0 0 0 2 2h4.5"></svg:path><svg:path d="M9 21v-6a2 2 0 0 1 2-2h2a2 2 0 0 1 1.807 1.143M20 21a1 1 0 1 0 2 0a1 1 0 1 0-2 0m0-5a1 1 0 1 0 2 0a1 1 0 1 0-2 0m-5 3a1 1 0 1 0 2 0a1 1 0 1 0-2 0"></svg:path><svg:path d="m21 16l-5 3l5 2"></svg:path></svg:g>`,
})
export class TablerHomeLinkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
