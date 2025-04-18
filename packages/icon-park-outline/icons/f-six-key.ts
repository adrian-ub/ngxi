import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineFSixKeyIcon],svg[icon-park-outline-f-six-key-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="4"><svg:rect width="36" height="36" x="6" y="6" stroke-linecap="round" stroke-linejoin="round" rx="3"></svg:rect><svg:path d="M30 32a4 4 0 1 0 0-8a4 4 0 0 0 0 8Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M34 18.876C33.382 17.19 31.892 16 30.152 16C27.86 16 26 17.451 26 20v8m-5-12h-7v16m0-8h7"></svg:path></svg:g>`,
})
export class IconParkOutlineFSixKeyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
