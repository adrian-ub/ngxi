import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidTubIcon],svg[icon-park-solid-tub-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="4"><svg:path d="M40 23V12a7 7 0 0 0-7-7v0a7 7 0 0 0-7 7v1"></svg:path><svg:path fill="currentColor" d="M40 29v-6H8v6a8 8 0 0 0 8 8h16a8 8 0 0 0 8-8Z"></svg:path><svg:path d="M43 23H5"></svg:path><svg:path stroke-linejoin="round" d="m17 37l-4 6m18-6l4 6"></svg:path></svg:g>`,
})
export class IconParkSolidTubIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
