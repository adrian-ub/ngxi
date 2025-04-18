import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineProgrammingModuleThreeCodeThreeModuleProgrammingPluginIcon],svg[streamline-programming-module-three-code-three-module-programming-plugin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:rect width="5.25" height="5.25" x=".5" y="8.25" rx=".5"></svg:rect><svg:rect width="5.25" height="5.25" x="8.25" y="8.25" rx=".5"></svg:rect><svg:rect width="5.25" height="5.25" x="4.38" y=".5" rx=".5"></svg:rect></svg:g>`,
})
export class StreamlineProgrammingModuleThreeCodeThreeModuleProgrammingPluginIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
