import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxChairIcon],svg[bx-chair-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 13V4c0-1.103-.897-2-2-2H7c-1.103 0-2 .897-2 2v9a1 1 0 0 0-1 1v8h2v-5h12v5h2v-8a1 1 0 0 0-1-1m-2-9v9h-2V4zm-4 0v9h-2V4zM7 4h2v9H7z"></svg:path>`,
})
export class BxChairIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
