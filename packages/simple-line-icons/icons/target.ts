import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[simpleLineIconsTargetIcon],svg[simple-line-icons-target-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M992 480h-97.44C879.168 293.472 730.512 144.96 544 129.536V32c0-17.664-14.336-32-32-32s-32 14.336-32 32v97.536C293.504 144.96 144.832 293.472 129.424 480H32c-17.664 0-32 14.336-32 32s14.336 32 32 32h97.424C144.832 730.512 293.504 879.04 480 894.464V992c0 17.664 14.336 32 32 32s32-14.336 32-32v-97.536C730.512 879.04 879.168 730.512 894.56 544H992c17.664 0 32-14.336 32-32s-14.336-32-32-32M480 193.584V480H193.552C208.56 328.8 328.8 208.592 480 193.584M193.552 544H480v286.416C328.8 815.408 208.56 695.2 193.552 544M544 830.416V544h286.448C815.44 695.2 695.2 815.408 544 830.416M544 480V193.584C695.2 208.592 815.44 328.8 830.448 480z"></svg:path>`,
})
export class SimpleLineIconsTargetIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}
