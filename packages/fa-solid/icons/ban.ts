import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[faSolidBanIcon],svg[fa-solid-ban-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 8C119.034 8 8 119.033 8 256s111.034 248 248 248s248-111.034 248-248S392.967 8 256 8m130.108 117.892c65.448 65.448 70 165.481 20.677 235.637L150.47 105.216c70.204-49.356 170.226-44.735 235.638 20.676M125.892 386.108c-65.448-65.448-70-165.481-20.677-235.637L361.53 406.784c-70.203 49.356-170.226 44.736-235.638-20.676"></svg:path>`,
})
export class FaSolidBanIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
