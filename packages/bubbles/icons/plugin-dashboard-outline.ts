import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bubblesPluginDashboardOutlineIcon],svg[bubbles-plugin-dashboard-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10.5 13.026a.98.98 0 0 1-.975.98h-7.8a.98.98 0 0 1-.975-.98V2.236a.98.98 0 0 1 .976-.98l7.8.013a.98.98 0 0 1 .974.98zm12.746-5.982a.97.97 0 0 1-.975.962h-7.8a.97.97 0 0 1-.975-.962V2.23a.97.97 0 0 1 .973-.962l7.8-.013a.97.97 0 0 1 .977.962zM10.5 22.79a.97.97 0 0 1-.977.966l-7.8-.013a.97.97 0 0 1-.973-.964v-4.81a.97.97 0 0 1 .975-.963h7.8a.97.97 0 0 1 .975.964zm3.972.966a.98.98 0 0 1-.976-.981V11.987a.977.977 0 0 1 .975-.981h7.8a.976.976 0 0 1 .975.98v10.776a.98.98 0 0 1-.974.98z"></svg:path>`,
})
export class BubblesPluginDashboardOutlineIcon {
  readonly viewBox = input("0 0 24 25")
  readonly width = input("0.96em")
  readonly height = input("1em")
}
