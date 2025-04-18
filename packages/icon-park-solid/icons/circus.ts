import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidCircusIcon],svg[icon-park-solid-circus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="4"><svg:path stroke-linejoin="round" d="M9 26s-.076.787-1 5c-.98 4.465-4 13-4 13h40s-3.02-8.535-4-13c-.924-4.213-1-5-1-5"></svg:path><svg:path stroke-linejoin="round" d="M20 28c1 9-4 16-4 16m12-16c-1 9 4 16 4 16"></svg:path><svg:path fill="currentColor" stroke-linejoin="round" d="M6 18s7.592-.055 11-1c2.866-.795 7-3 7-3s3.823 2.194 6.5 3c3.572 1.075 11.5 1 11.5 1l-1 7s-4 2-5 2s-3-2-4-2s-3.5 3-4 3s-3-3-4-3s-3 3.5-4 3.5s-3-3.5-4-3.5c-.198 0-.474.078-.79.204c-2.142.852-4.489 1.284-6.629.428L7 25z"></svg:path><svg:path d="M24 5v10"></svg:path><svg:path stroke-linejoin="round" d="M36 11V5s-1.5 3-6 0s-6 0-6 0v6s1.5-3 6 0s6 0 6 0"></svg:path></svg:g>`,
})
export class IconParkSolidCircusIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
