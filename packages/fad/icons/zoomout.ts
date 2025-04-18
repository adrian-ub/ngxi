import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fadZoomoutIcon],svg[fad-zoomout-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M120.46 158.29c-30.166 8.65-61.631-8.792-70.281-38.957s8.792-61.63 38.957-70.28s61.63 8.792 70.28 38.957c4.417 15.403-1.937 38.002-9.347 50.872c-.614 1.067 59.212 53.064 59.212 53.064l-17.427 17.63l-53.514-56.72s-10.233 3.241-17.88 5.434M104 144c22.091 0 40-17.909 40-40s-17.909-40-40-40s-40 17.909-40 40s17.909 40 40 40"></svg:path><svg:path d="M80 96.084v15.992h48V96.084z"></svg:path></svg:g>`,
})
export class FadZoomoutIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
