import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineDisabledComputerIcon],svg[icon-park-outline-disabled-computer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="4"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M23 5.998H9a3 3 0 0 0-3 3v22a3 3 0 0 0 3 3h30a3 3 0 0 0 3-3v-7M24 34v8"></svg:path><svg:circle cx="36" cy="12" r="6"></svg:circle><svg:path stroke-linecap="round" stroke-linejoin="round" d="m32 8l8 8M14 41.998h20"></svg:path></svg:g>`,
})
export class IconParkOutlineDisabledComputerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
