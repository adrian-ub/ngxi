import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phVideoCameraSlashBoldIcon],svg[ph-video-camera-slash-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M249.45 69.31a12 12 0 0 0-12.51 1L212 88.43V72a20 20 0 0 0-20-20h-68.12a12 12 0 0 0 0 24H188v68a12 12 0 0 0 4.46 9.33c.15.13.31.25.48.38l44 32A12 12 0 0 0 256 176V80a12 12 0 0 0-6.55-10.69M232 152.43l-20-14.54v-19.78l20-14.54ZM56.88 31.93a12 12 0 1 0-17.76 16.14L42.69 52H32a20 20 0 0 0-20 20v112a20 20 0 0 0 20 20h148.87l18.25 20.07a12 12 0 0 0 17.76-16.14ZM36 180V76h28.51l94.55 104Z"></svg:path>`,
})
export class PhVideoCameraSlashBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
