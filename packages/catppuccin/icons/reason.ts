import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[catppuccinReasonIcon],svg[catppuccin-reason-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#ed8796" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M3.5 1.5h9a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-9a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2m7 9h2"></svg:path><svg:path d="M13 7.5h-2.5v5H13m-6-2l1.5 2m-3 0l-.02-5H7c.75 0 1.5.5 1.5 1.5s-.75 1.5-1.5 1.5H5.5"></svg:path></svg:g>`,
})
export class CatppuccinReasonIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
