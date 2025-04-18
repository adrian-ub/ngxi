import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icTwotoneForwardIcon],svg[ic-twotone-forward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 14v1.17L17.17 12L14 8.83V10H6v4z" opacity=".3"></svg:path><svg:path fill="currentColor" d="m20 12l-8-8v4H4v8h8v4zM6 14v-4h8V8.83L17.17 12L14 15.17V14z"></svg:path>`,
})
export class IcTwotoneForwardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
