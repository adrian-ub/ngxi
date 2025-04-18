import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laCreativeCommonsNdIcon],svg[la-creative-commons-nd-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 3C8.832 3 3 8.832 3 16s5.832 13 13 13s13-5.832 13-13S23.168 3 16 3m0 2c6.065 0 11 4.935 11 11s-4.935 11-11 11S5 22.065 5 16S9.935 5 16 5m-5 8v2h10v-2zm0 4v2h10v-2z"></svg:path>`,
})
export class LaCreativeCommonsNdIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
