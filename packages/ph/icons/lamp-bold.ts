import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phLampBoldIcon],svg[ph-lamp-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m251 147.27l-48-112A12 12 0 0 0 192 28H64a12 12 0 0 0-11 7.27l-48 112A12 12 0 0 0 16 164h100v40H96a12 12 0 0 0 0 24h64a12 12 0 0 0 0-24h-20v-40h48v28a12 12 0 0 0 24 0v-28h28a12 12 0 0 0 11-16.73M34.2 140l37.71-88h112.18l37.71 88Z"></svg:path>`,
})
export class PhLampBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
