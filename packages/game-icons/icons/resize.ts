import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gameIconsResizeIcon],svg[game-icons-resize-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m29 30l1 90h36V66h26V30zm99 0v36h72V30zm108 0v36h72V30zm108 0v36h72V30zm102 0v78h36V30zm-206 80v36h100.543l-118 118H30v218h218V289.457l118-118V272h36V110zm206 34v72h36v-72zM30 156v72h36v-72zm416 96v72h36v-72zm0 108v72h36v-72zm-166 86v36h72v-36zm108 0v36h72v-36z"></svg:path>`,
})
export class GameIconsResizeIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
