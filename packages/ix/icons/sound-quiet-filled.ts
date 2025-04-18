import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixSoundQuietFilledIcon],svg[ix-sound-quiet-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m319.581 359.435l-33.324-26.66c39.793-42.567 39.794-108.443-.001-151.01l33.324-26.66c52.206 58.22 52.206 146.108.001 204.33M234.417 85.333l-110.854 87.23H42.667v170.666h81.02l110.73 85.458z"></svg:path>`,
})
export class IxSoundQuietFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
