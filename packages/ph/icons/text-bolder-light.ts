import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phTextBolderLightIcon],svg[ph-text-bolder-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M166.7 116.4A42 42 0 0 0 140 42H64a6.2 6.2 0 0 0-6 6v152a6 6 0 0 0 6 6h88a46 46 0 0 0 14.7-89.6ZM70 54h70a30 30 0 0 1 0 60H70Zm82 140H70v-68h82a34 34 0 0 1 0 68Z"></svg:path>`,
})
export class PhTextBolderLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
