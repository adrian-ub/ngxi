import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirRunningIcon],svg[iconoir-running-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M15 7a2 2 0 1 0 0-4a2 2 0 0 0 0 4m-2.387 1.267l-3.308 4.135l4.135 4.135l-2.067 4.55"></svg:path><svg:path d="m6.41 9.508l3.387-3.309l2.816 2.068l2.895 3.308h3.722M8.892 15.71l-1.241.827H4.343"></svg:path></svg:g>`,
})
export class IconoirRunningIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
