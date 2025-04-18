import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiAccountBoxMultipleOutlineIcon],svg[mdi-account-box-multiple-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 6H2v14a2 2 0 0 0 2 2h14v-2H4zm14.5 8.25c0-1.5-3-2.25-4.5-2.25s-4.5.75-4.5 2.25V15h9M14 10.25c1.24 0 2.25-1.01 2.25-2.25S15.24 5.75 14 5.75S11.75 6.76 11.75 8s1.01 2.25 2.25 2.25M20 2H8c-1.1 0-2 .9-2 2v12a2 2 0 0 0 2 2h12c1.11 0 2-.89 2-2V4a2 2 0 0 0-2-2m0 14H8V4h12z"></svg:path>`,
})
export class MdiAccountBoxMultipleOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
