import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineSunnyIcon],svg[icon-park-outline-sunny-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M30.783 24.565a6.783 6.783 0 1 0-6.683-7.947"></svg:path><svg:path fill="currentColor" d="M33 7a2 2 0 1 0 0-4a2 2 0 0 0 0 4m9 5a2 2 0 1 0 0-4a2 2 0 0 0 0 4m2 9a2 2 0 1 0 0-4a2 2 0 0 0 0 4M22 10a2 2 0 1 0 0-4a2 2 0 0 0 0 4"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M9.455 39.994A13.95 13.95 0 0 1 4 28.885C4 21.217 10.105 15 17.636 15c6.297 0 11.598 4.346 13.166 10.253a8.9 8.9 0 0 1 4.107-.996c5.02 0 9.091 4.144 9.091 9.256c0 3.796-2.244 7.059-5.455 8.487"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M22.243 24.757a6 6 0 0 0-8.485 8.485"></svg:path></svg:g>`,
})
export class IconParkOutlineSunnyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
