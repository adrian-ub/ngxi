import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixScreenPcTowerIcon],svg[ix-screen-pc-tower-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M469.333 448.003V170.669H298.667v277.334zM362.667 149.336v-64h-320v234.667h138.666v42.666h-32v42.667H256v-42.667h-32v-42.666h53.333v-42.667h-192V128.003H320v21.333zm-21.334 64h85.334v42.667h-85.334zm0 64v128h85.334v-128zm64 85.333v-42.666h-42.666v42.666z" clip-rule="evenodd"></svg:path>`,
})
export class IxScreenPcTowerIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
