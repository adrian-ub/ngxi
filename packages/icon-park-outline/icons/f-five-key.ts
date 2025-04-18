import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineFFiveKeyIcon],svg[icon-park-outline-f-five-key-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:rect width="36" height="36" x="6" y="6" rx="3"></svg:rect><svg:path d="M34 16h-8v6.919s1.833-1.419 4.5-1.419S34 23.659 34 27s-1.5 5-4.444 5C26.889 32 26 30.315 26 28.637M21 16h-7v16m0-8h7"></svg:path></svg:g>`,
})
export class IconParkOutlineFFiveKeyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
