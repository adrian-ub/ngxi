import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiWrapDisabledIcon],svg[mdi-wrap-disabled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 7H3V5h13zM3 19h13v-2H3zm19-7l-4-3v2H3v2h15v2z"></svg:path>`,
})
export class MdiWrapDisabledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
