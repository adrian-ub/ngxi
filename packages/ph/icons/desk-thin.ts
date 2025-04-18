import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phDeskThinIcon],svg[ph-desk-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M248 68H8a4 4 0 0 0 0 8h12v116a4 4 0 0 0 8 0v-52h200v52a4 4 0 0 0 8 0V76h12a4 4 0 0 0 0-8M28 76h96v56H28Zm200 56h-96V76h96ZM92 104a4 4 0 0 1-4 4H64a4 4 0 0 1 0-8h24a4 4 0 0 1 4 4m72 0a4 4 0 0 1 4-4h24a4 4 0 0 1 0 8h-24a4 4 0 0 1-4-4"></svg:path>`,
})
export class PhDeskThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
