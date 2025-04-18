import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phVirtualRealityFillIcon],svg[ph-virtual-reality-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M176 48H80a80 80 0 0 0 0 160h96a80 80 0 0 0 0-160m-52.51 50.81l-24 64a8 8 0 0 1-15 0l-24-64a8 8 0 1 1 15-5.62l16.51 44l16.51-44a8 8 0 1 1 15 5.62ZM191 156a8 8 0 0 1-13.9 7.94l-11.44-20c-.53 0-1.07.05-1.61.05H152v16a8 8 0 0 1-16 0V96a8 8 0 0 1 8-8h20a28 28 0 0 1 16.84 50.35Zm-15-40a12 12 0 0 1-12 12h-12v-24h12a12 12 0 0 1 12 12"></svg:path>`,
})
export class PhVirtualRealityFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
