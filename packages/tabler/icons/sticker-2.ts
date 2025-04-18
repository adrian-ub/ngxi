import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerSticker2Icon],svg[tabler-sticker-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M6 4h12a2 2 0 0 1 2 2v7h-5a2 2 0 0 0-2 2v5H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2"></svg:path><svg:path d="M20 13v.172a2 2 0 0 1-.586 1.414l-4.828 4.828a2 2 0 0 1-1.414.586H13"></svg:path></svg:g>`,
})
export class TablerSticker2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
