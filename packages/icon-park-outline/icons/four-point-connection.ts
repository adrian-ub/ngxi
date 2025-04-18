import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineFourPointConnectionIcon],svg[icon-park-outline-four-point-connection-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M8 28v12h12m8 0h12V28m0-8V8H28m-8 0H8v12m36 0h-8v8h8zm-32 0H4v8h8zm16 16h-8v8h8zm0-32h-8v8h8zm-4 14v12m-6-6h12M28 8l12 12M20 8L8 20m12 20L8 28m32 0L29 40"></svg:path>`,
})
export class IconParkOutlineFourPointConnectionIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
