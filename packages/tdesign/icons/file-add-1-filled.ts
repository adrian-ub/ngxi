import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignFileAdd1FilledIcon],svg[tdesign-file-add-1-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-opacity=".9" d="M15.414 1H3v22h18V6.586zM14.5 7.5V3L19 7.5zM16 16h-3v3h-2v-3H8v-2h3v-3h2v3h3z"></svg:path>`,
})
export class TdesignFileAdd1FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
