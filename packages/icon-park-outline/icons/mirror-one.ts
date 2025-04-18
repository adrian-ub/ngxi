import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineMirrorOneIcon],svg[icon-park-outline-mirror-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="4"><svg:circle cx="24" cy="20" r="16"></svg:circle><svg:path stroke-linecap="round" stroke-linejoin="round" d="M24 36v8m-10 0h20"></svg:path></svg:g>`,
})
export class IconParkOutlineMirrorOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
