import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiDockIcon],svg[zmdi-dock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M43 475v-43h170v43zM213 6q18 0 30.5 12T256 48v299q0 17-12.5 29.5T213 389H43q-18 0-30.5-12.5T0 347V48q0-18 12.5-30.5T43 5zm0 298V91H43v213z"></svg:path>`,
})
export class ZmdiDockIcon {
  readonly viewBox = input("0 0 256 480")
  readonly width = input("0.54em")
  readonly height = input("1em")
}
