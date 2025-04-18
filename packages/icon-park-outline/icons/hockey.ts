import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineHockeyIcon],svg[icon-park-outline-hockey-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" stroke-width="4"><svg:path d="m36 4l-5.77 27.41c-.2.93-1.01 1.59-1.96 1.59H9c-1.66 0-3 1.34-3 3v1.55c0 3.48 2.95 6.23 6.43 5.98l17.06-1.22a5.996 5.996 0 0 0 5.44-4.75L42 4zM15 16c4.418 0 8-1.343 8-3s-3.582-3-8-3s-8 1.343-8 3s3.582 3 8 3"></svg:path><svg:path d="M23 13v6c0 1.66-3.58 3-8 3s-8-1.34-8-3v-6"></svg:path></svg:g>`,
})
export class IconParkOutlineHockeyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
