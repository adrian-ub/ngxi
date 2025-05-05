import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsBookMarkedIcon],svg[proicons-book-marked-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5"><svg:path stroke-linecap="round" d="M4.5 16.25V5.75a3 3 0 0 1 3-3h11a1 1 0 0 1 1 1v12.5H7.375M4.5 16.245v2.38"></svg:path><svg:path stroke-linecap="round" d="M18.5 21.25H7a2.5 2.5 0 0 1 0-5h12.5v4a1 1 0 0 1-1 1"></svg:path><svg:path d="M15.5 2.75h-6v7.517a.2.2 0 0 0 .341.142l1.952-1.952a1 1 0 0 1 1.414 0l1.952 1.952a.2.2 0 0 0 .341-.142z"></svg:path></svg:g>`,
})
export class ProiconsBookMarkedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
