import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightPictureInPictureLargeSharpIcon],svg[material-symbols-light-picture-in-picture-large-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.923 15.616V5.923h11.693v9.693zM3 19v-1h17V5h1v14z"></svg:path>`,
})
export class MaterialSymbolsLightPictureInPictureLargeSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
