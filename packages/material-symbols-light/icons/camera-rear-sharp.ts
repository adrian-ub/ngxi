import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightCameraRearSharpIcon],svg[material-symbols-light-camera-rear-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m10.35 21.808l-.708-.708l1.6-1.6H6v-1h5.242l-1.6-1.6l.708-.708L13.158 19zM14 19.5v-1h4v1zM6 17V3h12v14h-5.417l-2.233-2.233L8.117 17zm6.001-7.039q.651 0 1.114-.463t.462-1.114t-.463-1.114t-1.115-.462t-1.113.463t-.463 1.115t.464 1.113T12 9.962"></svg:path>`,
})
export class MaterialSymbolsLightCameraRearSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
