import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirThumbsDownIcon],svg[iconoir-thumbs-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M16.472 3.5H4.1a.6.6 0 0 0-.6.6v9.8a.6.6 0 0 0 .6.6h2.768a2 2 0 0 1 1.715.971l2.71 4.517a1.631 1.631 0 0 0 2.961-1.308l-1.022-3.408a.6.6 0 0 1 .574-.772h4.576a2 2 0 0 0 1.929-2.526l-1.91-7A2 2 0 0 0 16.473 3.5Z"></svg:path><svg:path stroke-linejoin="round" d="M7 14.5v-11"></svg:path></svg:g>`,
})
export class IconoirThumbsDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
