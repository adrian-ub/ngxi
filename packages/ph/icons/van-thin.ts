import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phVanThinIcon],svg[ph-van-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m251 109.4l-45.53-53.1a12 12 0 0 0-9.21-4.3H32a12 12 0 0 0-12 12v112a12 12 0 0 0 12 12h20.29a28 28 0 0 0 55.42 0h56.58a28 28 0 0 0 55.42 0H240a12 12 0 0 0 12-12v-64a4 4 0 0 0-1-2.6m-51.64-47.93L239.3 108H172V60h24.26a4 4 0 0 1 3.1 1.47M100 108V60h64v48ZM32 60h60v48H28V64a4 4 0 0 1 4-4m48 144a20 20 0 1 1 20-20a20 20 0 0 1-20 20m112 0a20 20 0 1 1 20-20a20 20 0 0 1-20 20m48-24h-20.29a28 28 0 0 0-55.42 0h-56.58a28 28 0 0 0-55.42 0H32a4 4 0 0 1-4-4v-60h216v60a4 4 0 0 1-4 4"></svg:path>`,
})
export class PhVanThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
