import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cbiFriendsOfHueSenicIcon],svg[cbi-friends-of-hue-senic-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2v20h20V2Zm19.286 19.286H2.952V2.952h18.334ZM5.333 5.1v14.043h13.572V5.1Zm.953.953h5.476V18.19H6.286ZM17.952 18.19h-5.476V6.048h5.476z"></svg:path>`,
})
export class CbiFriendsOfHueSenicIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
