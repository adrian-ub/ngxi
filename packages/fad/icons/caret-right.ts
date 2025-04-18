import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fadCaretRightIcon],svg[fad-caret-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M117.846 184.606c-11.362 11.579-29.419 2.755-29.182-12.927h-.001c.237-15.683.237-71.905.237-87.358s18.3-23.578 29.817-12.17c11.515 11.409 37.257 38.828 43.427 45.614c6.168 6.786 7.463 14.243 0 21.574c-4.855 4.769-17.331 17.589-28.586 29.155c-6.047 6.214-11.741 12.066-15.712 16.112m-12.381-15.368c-.012 2.217 1.246 2.732 2.808 1.162l39.283-39.46a4.055 4.055 0 0 0 .03-5.693l-38.874-39.606c-1.54-1.568-2.808-1.058-2.82 1.152z" clip-rule="evenodd"></svg:path>`,
})
export class FadCaretRightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
