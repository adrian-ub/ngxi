import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ionFileTrayStackedSharpIcon],svg[ion-file-tray-stacked-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M448 16H64L32 176v144h448V176Zm-12 160H320a64 64 0 0 1-128 0H76L98 58h316ZM320 352a64 64 0 0 1-128 0H32v144h448V352Z"></svg:path>`,
})
export class IonFileTrayStackedSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
