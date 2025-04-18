import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phTreasureChestBoldIcon],svg[ph-treasure-chest-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M184 36H72a60.07 60.07 0 0 0-60 60v96a20 20 0 0 0 20 20h192a20 20 0 0 0 20-20V96a60.07 60.07 0 0 0-60-60m36 60v4h-28V60.91A36.05 36.05 0 0 1 220 96m-92 60a12 12 0 0 0 12-12v-20h28v64H88v-64h28v20a12 12 0 0 0 12 12m12-56v-4a12 12 0 0 0-24 0v4H88V60h80v40ZM64 60.91V100H36v-4a36.05 36.05 0 0 1 28-35.09M36 124h28v64H36Zm156 64v-64h28v64Z"></svg:path>`,
})
export class PhTreasureChestBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
