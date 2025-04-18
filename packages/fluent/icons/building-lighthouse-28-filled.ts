import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentBuildingLighthouse28FilledIcon],svg[fluent-building-lighthouse-28-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.812 2.203a1.25 1.25 0 0 1 1.372 0l4.633 3.043c1.242.816.667 2.747-.817 2.753v3.144a2.75 2.75 0 0 1 1.855 2.295l1.147 10.057A2.25 2.25 0 0 1 16.767 26H6.27a2.25 2.25 0 0 1-2.236-2.505l1.147-10.057A2.75 2.75 0 0 1 7 11.156V7.999c-1.487-.002-2.064-1.936-.82-2.753zm5.73 12.966L6.177 17.96l-.405 3.556l11.153-3.003zM14.5 8h-6v3h6zm4.72-2.78a.75.75 0 1 0 1.06 1.061l1.5-1.5a.75.75 0 1 0-1.06-1.06zm0 6a.75.75 0 0 0 0 1.061l1.5 1.5a.75.75 0 0 0 1.06-1.06l-1.5-1.5a.75.75 0 0 0-1.06 0M23.25 8h-3.5a.75.75 0 0 0 0 1.5h3.5a.75.75 0 1 0 0-1.5"></svg:path>`,
})
export class FluentBuildingLighthouse28FilledIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
