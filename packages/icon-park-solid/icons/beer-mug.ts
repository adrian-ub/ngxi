import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidBeerMugIcon],svg[icon-park-solid-beer-mug-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSBeerMug0"><svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#fff" stroke="#fff" d="M16 37.241C16 39.172 16.857 44 28 44s12-4.828 12-6.759V16H16z"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M25 23v14m6-14v14"></svg:path><svg:path stroke="#fff" d="M15.998 16s-1.999-4.5 1-7S23 8 23 8s1-4 5-4s5 4 5 4s3.5-1.5 6 1s.999 7 .999 7M16 19H6s1 10 2 13c.998 3 8 2 8 2"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSBeerMug0)"></svg:path>`,
})
export class IconParkSolidBeerMugIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
