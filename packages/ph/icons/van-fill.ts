import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phVanFillIcon],svg[ph-van-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m254.07 106.79l-45.54-53.06A16 16 0 0 0 196.26 48H32a16 16 0 0 0-16 16v112a16 16 0 0 0 16 16h17a32 32 0 0 0 62 0h50a32 32 0 0 0 62 0h17a16 16 0 0 0 16-16v-64a8 8 0 0 0-1.93-5.21M32 104V64h56v40Zm48 96a16 16 0 1 1 16-16a16 16 0 0 1-16 16m80-96h-56V64h56Zm32 96a16 16 0 1 1 16-16a16 16 0 0 1-16 16m-16-96V64h20.26l34.33 40Z"></svg:path>`,
})
export class PhVanFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
