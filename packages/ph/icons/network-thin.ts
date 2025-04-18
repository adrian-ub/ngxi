import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phNetworkThinIcon],svg[ph-network-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 116H132V84h12a12 12 0 0 0 12-12V40a12 12 0 0 0-12-12h-32a12 12 0 0 0-12 12v32a12 12 0 0 0 12 12h12v32H24a4 4 0 0 0 0 8h36v40H48a12 12 0 0 0-12 12v32a12 12 0 0 0 12 12h32a12 12 0 0 0 12-12v-32a12 12 0 0 0-12-12H68v-40h120v40h-12a12 12 0 0 0-12 12v32a12 12 0 0 0 12 12h32a12 12 0 0 0 12-12v-32a12 12 0 0 0-12-12h-12v-40h36a4 4 0 0 0 0-8M108 72V40a4 4 0 0 1 4-4h32a4 4 0 0 1 4 4v32a4 4 0 0 1-4 4h-32a4 4 0 0 1-4-4M84 176v32a4 4 0 0 1-4 4H48a4 4 0 0 1-4-4v-32a4 4 0 0 1 4-4h32a4 4 0 0 1 4 4m128 0v32a4 4 0 0 1-4 4h-32a4 4 0 0 1-4-4v-32a4 4 0 0 1 4-4h32a4 4 0 0 1 4 4"></svg:path>`,
})
export class PhNetworkThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
