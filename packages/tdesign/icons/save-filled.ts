import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignSaveFilledIcon],svg[tdesign-save-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 2v2h3V2z"></svg:path><svg:path fill="currentColor" d="M6 2v4h7V2h3.414L22 7.586V22h-4v-7H6v7H2V2z"></svg:path><svg:path fill="currentColor" d="M8 22h8v-5H8z"></svg:path>`,
})
export class TdesignSaveFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
