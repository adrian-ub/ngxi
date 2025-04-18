import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineErrorPromptIcon],svg[icon-park-outline-error-prompt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="m8 18l12 12m0-12L8 30M34 8c5 4.36 8 9.931 8 16s-3 11.64-8 16m-7-26c3.75 2.726 6 6.207 6 10s-2.25 7.274-6 10"></svg:path>`,
})
export class IconParkOutlineErrorPromptIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
