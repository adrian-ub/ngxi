import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phTreasureChestDuotoneIcon],svg[ph-treasure-chest-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M232 112v80a8 8 0 0 1-8 8H32a8 8 0 0 1-8-8v-80h88v32h32v-32Z" opacity=".2"></svg:path><svg:path d="M184 40H72a56.06 56.06 0 0 0-56 56v96a16 16 0 0 0 16 16h192a16 16 0 0 0 16-16V96a56.06 56.06 0 0 0-56-56m40 56v8h-32V56.8A40.07 40.07 0 0 1 224 96m-88 40h-16v-32h16Zm-24 16h32a8 8 0 0 0 8-8v-24h24v72H80v-72h24v24a8 8 0 0 0 8 8m40-48v-8a8 8 0 0 0-8-8h-32a8 8 0 0 0-8 8v8H80V56h96v48ZM64 56.8V104H32v-8a40.07 40.07 0 0 1 32-39.2M32 120h32v72H32Zm192 72h-32v-72h32z"></svg:path></svg:g>`,
})
export class PhTreasureChestDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
