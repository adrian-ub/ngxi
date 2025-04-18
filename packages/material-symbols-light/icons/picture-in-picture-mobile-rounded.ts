import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightPictureInPictureMobileRoundedIcon],svg[material-symbols-light-picture-in-picture-mobile-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 19.385q0 .69-.462 1.153T17.384 21H6.616q-.691 0-1.153-.462T5 19.385V4.615q0-.69.463-1.152T6.616 3h10.769q.69 0 1.153.463T19 4.616zm-2.039-7.5V5.808q0-.348-.23-.578T16.155 5h-4.077q-.348 0-.578.23t-.23.578v6.077q0 .348.23.578t.578.23h4.077q.348 0 .578-.23t.23-.578"></svg:path>`,
})
export class MaterialSymbolsLightPictureInPictureMobileRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
