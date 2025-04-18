import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineTireSwingIcon],svg[icon-park-outline-tire-swing-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M4 4s6 6 20 6s20-6 20-6m-20 6v6"></svg:path><svg:ellipse cx="30" cy="30" rx="8" ry="14"></svg:ellipse><svg:ellipse cx="30" cy="30" rx="3" ry="6"></svg:ellipse><svg:path d="M18 44c-4.418 0-8-6.268-8-14s3.582-14 8-14m12 0H18m12 28H18m4-15H10m13-7H12m11 15H12"></svg:path></svg:g>`,
})
export class IconParkOutlineTireSwingIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
