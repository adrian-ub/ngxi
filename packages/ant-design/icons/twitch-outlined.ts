import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[antDesignTwitchOutlinedIcon],svg[ant-design-twitch-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M166.133 112L114 251.167v556.466h191.2V912h104.4l104.233-104.4h156.5L879 599V112zm69.534 69.5H809.5v382.633L687.767 685.867H496.5L392.267 790.1V685.867h-156.6zM427 529.4h69.5V320.733H427zm191.167 0H687.7V320.733h-69.533z"></svg:path>`,
})
export class AntDesignTwitchOutlinedIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}
