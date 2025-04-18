import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxsFilePlusIcon],svg[bxs-file-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 22h12a2 2 0 0 0 2-2V8l-6-6H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2m7-18l5 5h-5zM8 14h3v-3h2v3h3v2h-3v3h-2v-3H8z"></svg:path>`,
})
export class BxsFilePlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
