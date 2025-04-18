import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[octiconShareAndroid16Icon],svg[octicon-share-android-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 3a3 3 0 0 1-5.175 2.066l-3.92 2.179a3 3 0 0 1 0 1.51l3.92 2.179a3 3 0 1 1-.73 1.31l-3.92-2.178a3 3 0 1 1 0-4.133l3.92-2.178A3 3 0 1 1 15 3m-1.5 10a1.5 1.5 0 1 0-3.001.001A1.5 1.5 0 0 0 13.5 13m-9-5a1.5 1.5 0 1 0-3.001.001A1.5 1.5 0 0 0 4.5 8m9-5a1.5 1.5 0 1 0-3.001.001A1.5 1.5 0 0 0 13.5 3"></svg:path>`,
})
export class OcticonShareAndroid16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
