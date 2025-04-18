import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uilWebcamIcon],svg[uil-webcam-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 13a3 3 0 1 0-3-3a3 3 0 0 0 3 3m0-4a1 1 0 1 1-1 1a1 1 0 0 1 1-1m9.59 9.16A10 10 0 0 0 19 13.89a8 8 0 1 0-14 0a9.9 9.9 0 0 0-2.6 4.27a3 3 0 0 0 .47 2.63A3 3 0 0 0 5.3 22h13.4a3 3 0 0 0 2.42-1.21a3 3 0 0 0 .47-2.63M12 4a6 6 0 1 1-6 6a6 6 0 0 1 6-6m7.52 15.59a1 1 0 0 1-.82.41H5.3a1 1 0 0 1-.82-.41a1 1 0 0 1-.15-.87a7.85 7.85 0 0 1 1.88-3.22a8 8 0 0 0 11.58 0a7.85 7.85 0 0 1 1.88 3.22a1 1 0 0 1-.15.87"></svg:path>`,
})
export class UilWebcamIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
