import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fa6SolidRIcon],svg[fa6-solid-r-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M64 32C28.7 32 0 60.7 0 96v352c0 17.7 14.3 32 32 32s32-14.3 32-32V320h95.3l102.5 146.4c10.1 14.5 30.1 18 44.6 7.9s18-30.1 7.9-44.6l-84.2-120.2C282.8 288.1 320 236.4 320 176c0-79.5-64.5-144-144-144zm112 224H64V96h112c44.2 0 80 35.8 80 80s-35.8 80-80 80"></svg:path>`,
})
export class Fa6SolidRIcon {
  readonly viewBox = input("0 0 320 512")
  readonly width = input("0.63em")
  readonly height = input("1em")
}
