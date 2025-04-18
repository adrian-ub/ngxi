import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laCreativeCommonsRemixIcon],svg[la-creative-commons-remix-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 3C8.832 3 3 8.832 3 16s5.832 13 13 13s13-5.832 13-13S23.168 3 16 3m0 2c6.065 0 11 4.935 11 11s-4.935 11-11 11S5 22.065 5 16S9.935 5 16 5m-1.502 4L11 10.328v3.625l.064.026l-.066.021L8 15.139v3.377L11.002 20L14 18.59v.002l6.502 2.416L24 19.678v-3.623l-3-1.116v-3.521zm5.217 6.527l2.365.88l-1.582.6l-2.363-.878zm-4.715.5l5 1.862v1.865l-5-1.858zm8 1.1v1.861l-2 .76v-1.861z"></svg:path>`,
})
export class LaCreativeCommonsRemixIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
