import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirPanoramaEnlargeIcon],svg[iconoir-panorama-enlarge-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 5c2.995 0 7.235.692 8.576.925a.58.58 0 0 1 .48.503c.13 1.028.444 3.691.444 5.572c0 1.88-.313 4.544-.444 5.572a.58.58 0 0 1-.48.503c-1.34.233-5.58.925-8.576.925c-2.995 0-7.235-.692-8.576-.925a.58.58 0 0 1-.48-.503C2.814 16.544 2.5 13.881 2.5 12c0-1.88.313-4.544.444-5.572a.58.58 0 0 1 .48-.503C4.764 5.692 9.004 5 12 5"></svg:path>`,
})
export class IconoirPanoramaEnlargeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
