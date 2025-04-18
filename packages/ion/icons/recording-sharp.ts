import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ionRecordingSharpIcon],svg[ion-recording-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M384 138a117.93 117.93 0 0 0-91.84 192h-72.32A118 118 0 1 0 128 374h256a118 118 0 0 0 0-236M54 256a74 74 0 1 1 74 74a74.09 74.09 0 0 1-74-74m330 74a74 74 0 1 1 74-74a74.09 74.09 0 0 1-74 74"></svg:path>`,
})
export class IonRecordingSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
