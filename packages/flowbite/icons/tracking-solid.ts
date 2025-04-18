import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flowbiteTrackingSolidIcon],svg[flowbite-tracking-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M9.166 19.986A1 1 0 0 1 9 20H5a1 1 0 1 1 0-2h4q.085 0 .166.014a3.001 3.001 0 0 1 5.668 0A1 1 0 0 1 15 18h4a1 1 0 1 1 0 2h-4q-.084 0-.166-.014a3.001 3.001 0 0 1-5.668 0M11 19a1 1 0 1 1 2 0a1 1 0 0 1-2 0" clip-rule="evenodd"></svg:path><svg:path d="M11.5 2.131a1 1 0 0 1 1 0l4.601 2.657q-.09.028-.179.075L12.08 7.475L6.946 4.76zM5.967 6.505v5.21a1 1 0 0 0 .5.866l4.57 2.638V9.186zm7.07 8.671l4.496-2.595a1 1 0 0 0 .5-.866v-5.2a1 1 0 0 1-.161.108l-4.835 2.608z"></svg:path></svg:g>`,
})
export class FlowbiteTrackingSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
