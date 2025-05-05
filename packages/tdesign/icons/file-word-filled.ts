import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignFileWordFilledIcon],svg[tdesign-file-word-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.414 1H3v22h18V6.586zM14.5 7.5V3L19 7.5zM10 16h1v-5h2v5h1v-5h2v5a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-5h2z"></svg:path>`,
})
export class TdesignFileWordFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
