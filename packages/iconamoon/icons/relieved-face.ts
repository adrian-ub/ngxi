import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconamoonRelievedFaceIcon],svg[iconamoon-relieved-face-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:circle cx="12" cy="12" r="9"></svg:circle><svg:path d="M14 15.5a4 4 0 0 1-2 .535a4 4 0 0 1-2-.535m4-5c.463.188.97.29 1.5.29s1.037-.102 1.5-.29m-10 0c.463.188.97.29 1.5.29s1.037-.102 1.5-.29"></svg:path></svg:g>`,
})
export class IconamoonRelievedFaceIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
