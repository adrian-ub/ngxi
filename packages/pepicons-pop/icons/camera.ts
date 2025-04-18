import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopCameraIcon],svg[pepicons-pop-camera-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M11.5 4h-7a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3h7a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3m-8 3a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-7a1 1 0 0 1-1-1z"></svg:path><svg:path d="m16.934 5.176l-3.468 2.381a1 1 0 0 0-.434.815L13 11.587a1 1 0 0 0 .434.834l3.5 2.403A1 1 0 0 0 18.5 14V6a1 1 0 0 0-1.566-.824M16.5 12.1l-1.495-1.026l.022-2.163L16.5 7.9z"></svg:path></svg:g>`,
})
export class PepiconsPopCameraIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
