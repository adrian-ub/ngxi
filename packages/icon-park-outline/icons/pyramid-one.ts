import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlinePyramidOneIcon],svg[icon-park-outline-pyramid-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="4"><svg:path stroke-linejoin="round" d="m19 14l14 28H5z" clip-rule="evenodd"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="m24 25l-9 17m18 0h10.5L35 28l-4.5 8"></svg:path><svg:path stroke-linecap="round" d="M25.984 26.396c6.228-1.582 9.994-7.914 8.412-14.142s-7.914-9.995-14.142-8.412c-6.229 1.582-9.995 7.913-8.413 14.142a11.6 11.6 0 0 0 1.937 4.078"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M20 42H10m12.5-21l5 10"></svg:path></svg:g>`,
})
export class IconParkOutlinePyramidOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
