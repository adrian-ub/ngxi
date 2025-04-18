import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidFlipCameraIcon],svg[icon-park-solid-flip-camera-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSFlipCamera0"><svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#fff" stroke="#fff" d="M12 11h5l2-4h10l2 4h5v16H12z"></svg:path><svg:circle cx="24" cy="18" r="4" fill="#000" stroke="#000"></svg:circle><svg:path stroke="#fff" d="M24 38C12.954 38 4 33.523 4 28c0-1.422.594-2.775 1.664-4M24 38l-4-4m4 4l-4 4m12-4.832C39.064 35.625 44 32.1 44 28c0-1.422-.594-2.775-1.664-4"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSFlipCamera0)"></svg:path>`,
})
export class IconParkSolidFlipCameraIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
