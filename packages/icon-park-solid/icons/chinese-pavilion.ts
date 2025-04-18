import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidChinesePavilionIcon],svg[icon-park-solid-chinese-pavilion-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="4"><svg:path fill="currentColor" stroke-linejoin="round" d="M15 12h18s3.363 3.011 6 4c1.864.7 5 1 5 1s-1.816.649-3 1c-1.544.458-4 1-4 1H11s-2.456-.542-4-1c-1.184-.351-3-1-3-1s3.136-.3 5-1c2.637-.989 6-4 6-4Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="m18 12l6-8l6 8z"></svg:path><svg:path stroke-linecap="round" d="M11 19v19m26-19v19"></svg:path><svg:path stroke-linejoin="round" d="M6 38h36v6H6z"></svg:path></svg:g>`,
})
export class IconParkSolidChinesePavilionIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
