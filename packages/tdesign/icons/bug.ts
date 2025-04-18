import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignBugIcon],svg[tdesign-bug-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.17 5h5.66a3.001 3.001 0 0 0-5.66 0M7 6a5 5 0 0 1 10 0v1H7zM5 4v2.586L6.414 8h11.172L19 6.586V4h2v3.414l-3 3V12h3v2h-3v1.586l3 3V22h-2v-2.586l-1.36-1.36A6.01 6.01 0 0 1 13 21.917V22h-1a6 6 0 0 1-5.64-3.946L5 19.414V22H3v-3.414l3-3V14H3v-2h3v-1.586l-3-3V4zm3 6.414V16a4 4 0 0 0 3 3.874V10H8.414zM13 10v9.874c1.725-.444 3-2.01 3-3.874v-5.586L15.586 10z"></svg:path>`,
})
export class TdesignBugIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
