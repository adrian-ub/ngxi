import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icomoonFreeVolumeLowIcon],svg[icomoon-free-volume-low-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.578 11.578a.75.75 0 0 1-.53-1.281a3.254 3.254 0 0 0 0-4.596a.75.75 0 1 1 1.061-1.061a4.756 4.756 0 0 1 0 6.718a.75.75 0 0 1-.53.22zM6.5 15a.5.5 0 0 1-.354-.146L2.292 11H.499a.5.5 0 0 1-.5-.5v-5a.5.5 0 0 1 .5-.5h1.793l3.854-3.854A.499.499 0 0 1 7 1.5v13a.5.5 0 0 1-.5.5"></svg:path>`,
})
export class IcomoonFreeVolumeLowIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
