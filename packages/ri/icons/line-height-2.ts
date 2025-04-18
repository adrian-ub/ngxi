import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riLineHeight2Icon],svg[ri-line-height-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 3v2h2v14H2v2h6v-2H6V5h2V3zm8.2 15h2.154l1.2-3h4.892l1.2 3H21.8L17 6h-2zM16 8.885L17.646 13h-3.292z"></svg:path>`,
})
export class RiLineHeight2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
