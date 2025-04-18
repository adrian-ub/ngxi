import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineMouthLipSolidIcon],svg[streamline-mouth-lip-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13.722 6.865a7 7 0 0 0-.198-.442a6 6 0 0 0-1.168-1.639c-.564-.546-1.33-1.02-2.324-1.143c-.896-.112-1.905.07-3.032.633c-1.127-.563-2.137-.745-3.033-.633c-.993.123-1.76.597-2.324 1.143a6 6 0 0 0-1.167 1.64a7 7 0 0 0-.198.441zM.334 8.115A8 8 0 0 0 1.76 9.837C2.855 10.83 4.566 11.82 7 11.82s4.145-.99 5.239-1.982a8 8 0 0 0 1.426-1.722H.335Z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineMouthLipSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
