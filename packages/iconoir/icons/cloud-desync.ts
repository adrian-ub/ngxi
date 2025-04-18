import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirCloudDesyncIcon],svg[iconoir-cloud-desync-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M20 17.607c1.494-.585 3-1.918 3-4.607c0-4-3.333-5-5-5c0-2 0-6-6-6S6 6 6 8c-1.667 0-5 1-5 5c0 2.689 1.506 4.022 3 4.607m12.42 1.88l-1.768 1.768a4 4 0 0 1-5.656 0l-.354-.353"></svg:path><svg:path d="m16.067 21.962l.353-2.475l-2.475.354zm-8.487-5.06l1.768-1.768a4 4 0 0 1 5.657 0l.354.353"></svg:path><svg:path d="m7.934 14.427l-.353 2.475l2.474-.354z"></svg:path></svg:g>`,
})
export class IconoirCloudDesyncIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
