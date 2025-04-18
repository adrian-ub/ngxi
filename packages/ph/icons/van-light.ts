import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phVanLightIcon],svg[ph-van-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M252.55 108.09L207 55a14 14 0 0 0-10.74-5H32a14 14 0 0 0-14 14v112a14 14 0 0 0 14 14h18.6a30 30 0 0 0 58.8 0h53.2a30 30 0 0 0 58.8 0H240a14 14 0 0 0 14-14v-64a6 6 0 0 0-1.45-3.91m-54.7-45.32L234.94 106H174V62h22.26a2 2 0 0 1 1.59.77M102 106V62h60v44ZM32 62h58v44H30V64a2 2 0 0 1 2-2m48 140a18 18 0 1 1 18-18a18 18 0 0 1-18 18m112 0a18 18 0 1 1 18-18a18 18 0 0 1-18 18m48-24h-18.6a30 30 0 0 0-58.8 0h-53.2a30 30 0 0 0-58.8 0H32a2 2 0 0 1-2-2v-58h212v58a2 2 0 0 1-2 2"></svg:path>`,
})
export class PhVanLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
