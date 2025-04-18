import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineSphereIcon],svg[icon-park-outline-sphere-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4"><svg:path stroke-linecap="round" d="M24 32c11.046 0 20-3.582 20-8s-8.954-8-20-8s-20 3.582-20 8s8.954 8 20 8"></svg:path><svg:path stroke-linecap="round" d="M32 24c0 11.046-3.582 20-8 20s-8-8.954-8-20s3.582-20 8-20s8 8.954 8 20"></svg:path><svg:circle cx="24" cy="24" r="20"></svg:circle></svg:g>`,
})
export class IconParkOutlineSphereIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
