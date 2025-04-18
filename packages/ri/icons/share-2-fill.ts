import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riShare2FillIcon],svg[ri-share-2-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.414 9L12 2.586L5.586 9H11v7h2V9zM3 14v4a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3v-4h-2v4a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-4z"></svg:path>`,
})
export class RiShare2FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
