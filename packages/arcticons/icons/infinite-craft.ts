import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsInfiniteCraftIcon],svg[arcticons-infinite-craft-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M23.935 24c3.887-5.69 8.516-9.49 12.93-8.972c2.772.325 6.635 2.588 6.635 8.972s-3.863 8.647-6.635 8.972c-4.414.517-9.043-3.283-12.93-8.972"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24.065 24c-3.887-5.69-8.516-9.49-12.93-8.972C8.363 15.353 4.5 17.616 4.5 24s3.863 8.647 6.635 8.972c4.414.517 9.043-3.283 12.93-8.972"></svg:path>`,
})
export class ArcticonsInfiniteCraftIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
