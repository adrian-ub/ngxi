import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsRoadFinishLightIcon],svg[lets-icons-road-finish-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round"><svg:path d="M16.5 10.5h1.8c1.12 0 1.68 0 2.108.218a2 2 0 0 1 .874.874c.218.428.218.988.218 2.108v3.6c0 1.12 0 1.68-.218 2.108a2 2 0 0 1-.874.874c-.428.218-.988.218-2.108.218H5.7c-1.12 0-1.68 0-2.108-.218a2 2 0 0 1-.874-.874C2.5 18.98 2.5 18.42 2.5 17.3v-3.6c0-1.12 0-1.68.218-2.108a2 2 0 0 1 .874-.874C4.02 10.5 4.58 10.5 5.7 10.5h1.8m-2 10l2-10m11 10l-2-10m-4.5 7v-2"></svg:path><svg:path stroke-linejoin="round" d="M12 7.5V4c0-.236 0-.354.073-.427s.191-.073.427-.073h6l-2 2l2 2zm0 0V12"></svg:path></svg:g>`,
})
export class LetsIconsRoadFinishLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
