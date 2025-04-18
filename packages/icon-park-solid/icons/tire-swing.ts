import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidTireSwingIcon],svg[icon-park-solid-tire-swing-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSTireSwing0"><svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path stroke="#fff" d="M4 4s6 6 20 6s20-6 20-6m-20 6v6"></svg:path><svg:ellipse cx="30" cy="30" fill="#fff" stroke="#fff" rx="8" ry="14"></svg:ellipse><svg:ellipse cx="30" cy="30" fill="#000" stroke="#000" rx="3" ry="6"></svg:ellipse><svg:path stroke="#fff" d="M18 44c-4.418 0-8-6.268-8-14s3.582-14 8-14m12 0H18m12 28H18m4-15H10m13-7H12m11 15H12"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSTireSwing0)"></svg:path>`,
})
export class IconParkSolidTireSwingIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
