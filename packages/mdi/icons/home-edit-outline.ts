import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiHomeEditOutlineIcon],svg[mdi-home-edit-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.041 11.14c.142 0 .276.057.38.163l1.276 1.276a.54.54 0 0 1 0 .77l-1 1l-2.046-2.046l1-1a.57.57 0 0 1 .39-.163m-1.978 1.74l2.046 2.052L15.063 21H13v-2.063zM12 5.688l-5 4.5V18h4v2H5v-8H2l10-9l7.459 6.713L17 12.172v-1.984z"></svg:path>`,
})
export class MdiHomeEditOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
