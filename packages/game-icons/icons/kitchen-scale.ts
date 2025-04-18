import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gameIconsKitchenScaleIcon],svg[game-icons-kitchen-scale-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m50.73 121l49.57 62h311.4l49.6-62zM245 201v46h22v-46zm-126 64L75.53 439H436.5L393 265zm137 14c40.2 0 73 32.8 73 73s-32.8 73-73 73s-73-32.8-73-73s32.8-73 73-73m0 18c-30.5 0-55 24.5-55 55s24.5 55 55 55s55-24.5 55-55s-24.5-55-55-55m16 12.5l-5.9 65.7l-30.2-10.5zM41 457v30h430v-30z"></svg:path>`,
})
export class GameIconsKitchenScaleIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
