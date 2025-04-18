import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineWaistlineIcon],svg[icon-park-outline-waistline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M13 31c3.056 1.51 13.2 3.622 22 0"></svg:path><svg:circle cx="24" cy="25.412" r="2" fill="currentColor"></svg:circle><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M10 5c1.856 3.278 4.971 10.258 5 17c.009 2.065-.319 4.107-1 6.014C12.18 33.1 9.453 36.042 9 43M38 5c-1.856 3.278-4.971 10.258-5 17c-.009 2.065.319 4.107 1 6.014C35.82 33.1 38.546 36.042 39 43M8 18s1 2 1 4c0 1.61-1 4-1 4m32-8s-1 2-1 4c0 1.61 1 4 1 4"></svg:path></svg:g>`,
})
export class IconParkOutlineWaistlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
