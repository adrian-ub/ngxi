import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laStarOfLifeIcon],svg[la-star-of-life-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 4v6.805L7.107 7.402l-3 5.198L10 16l-5.893 3.4l3 5.198L13 21.195V28h6v-6.805l5.893 3.403l3-5.198L22 16l5.893-3.4l-3-5.198L19 10.805V4zm2 2h2v8.27l7.16-4.135l1 1.73L18 16l7.16 4.135l-1 1.73L17 17.73V26h-2v-8.27l-7.16 4.135l-1-1.73L14 16l-7.16-4.135l1-1.73L15 14.27z"></svg:path>`,
})
export class LaStarOfLifeIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
