import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[topcoatCameraIcon],svg[topcoat-camera-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.41 22.58c0 3.359 2.73 6.09 6.09 6.09s6.09-2.73 6.09-6.09s-2.73-6.09-6.09-6.09a6.095 6.095 0 0 0-6.09 6.09M3.5 36.5h34c2.63 0 3-.37 3-3v-23c0-2.462-.38-3-3-3h-10c0-2.57-.42-3-3-3h-8c-2.55 0-3 .48-3 3h-10c-2.58 0-3 .692-3 3v23c0 2.6.38 3 3 3m7.64-13.92c0-5.17 4.19-9.359 9.36-9.359s9.359 4.189 9.359 9.359s-4.189 9.359-9.359 9.359s-9.36-4.189-9.36-9.359"></svg:path>`,
})
export class TopcoatCameraIcon {
  readonly viewBox = input("0 0 42 42")
  readonly width = input("1em")
  readonly height = input("1em")
}
