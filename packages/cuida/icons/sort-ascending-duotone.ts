import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cuidaSortAscendingDuotoneIcon],svg[cuida-sort-ascending-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M7.5 2.286a1 1 0 0 0-1 1v12a1 1 0 1 0 2 0v-12a1 1 0 0 0-1-1"></svg:path><svg:path d="M8.207 2.579a1 1 0 0 0-1.414 0l-3.5 3.5a1 1 0 1 0 1.414 1.414L7.5 4.7l2.793 2.793a1 1 0 1 0 1.414-1.414z"></svg:path><svg:path fill-opacity=".3" d="M16.5 22.286a1 1 0 0 0 1-1v-12a1 1 0 1 0-2 0v12a1 1 0 0 0 1 1"></svg:path><svg:path fill-opacity=".3" d="M15.793 21.993a1 1 0 0 0 1.414 0l3.5-3.5a1 1 0 0 0-1.414-1.414L16.5 19.872l-2.793-2.793a1 1 0 0 0-1.414 1.414z"></svg:path></svg:g>`,
})
export class CuidaSortAscendingDuotoneIcon {
  readonly viewBox = input("0 0 24 25")
  readonly width = input("0.96em")
  readonly height = input("1em")
}
