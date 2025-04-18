import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[deviconPlainJiraIcon],svg[devicon-plain-jira-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M61.805 16c0 11.52 9.329 20.848 20.848 20.848h8.5v8.227c0 11.52 9.328 20.848 20.848 20.848V19.978A3.98 3.98 0 0 0 108.024 16zM38.903 39.039c0 11.519 9.325 20.848 20.844 20.848h8.504v8.227c0 11.52 9.328 20.848 20.848 20.848V43.017a3.983 3.983 0 0 0-3.977-3.977H38.903zM16.001 62.078c0 11.52 9.324 20.848 20.844 20.848h8.504v8.227c0 11.524 9.329 20.848 20.848 20.848V66.06a3.984 3.984 0 0 0-3.977-3.98H16.001z"></svg:path>`,
})
export class DeviconPlainJiraIcon {
  readonly viewBox = input("0 0 128 128")
  readonly width = input("1em")
  readonly height = input("1em")
}
