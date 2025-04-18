import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightPictureInPictureMediumSharpIcon],svg[material-symbols-light-picture-in-picture-medium-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.923 15.616V7.923h9.693v7.693zM3 19v-1h17V5h1v14z"></svg:path>`,
})
export class MaterialSymbolsLightPictureInPictureMediumSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
