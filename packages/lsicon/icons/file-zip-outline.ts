import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconFileZipOutlineIcon],svg[lsicon-file-zip-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" d="M9 7v5m2 0v-2m0 0V7.5m0 2.5h2.5V7.5H11m0 0V7m-7 .5h3V8l-2.5 3v.5h3m4 2v1h-9v-13h6m0 0v3h3m-3-3H9L11.5 4v.5m0 0V6"></svg:path>`,
})
export class LsiconFileZipOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
