import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignFileAddFilledIcon],svg[tdesign-file-add-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.414 1H3v22h10.876A6.5 6.5 0 0 1 21 12.814V6.586zM14.5 7.5V3L19 7.5z"></svg:path><svg:path fill="currentColor" d="M20 14v4h4v2h-4v4h-2v-4h-4v-2h4v-4z"></svg:path>`,
})
export class TdesignFileAddFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
