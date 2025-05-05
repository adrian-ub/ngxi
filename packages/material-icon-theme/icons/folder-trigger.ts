import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderTriggerIcon],svg[material-icon-theme-folder-trigger-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#ffc107" d="m443.008 241.152l-41.216-34.304A64 64 0 0 0 360.832 192H128a64 64 0 0 0-64 64v512a64 64 0 0 0 64 64h768a64 64 0 0 0 64-64V320a64 64 0 0 0-64-64H483.968a64 64 0 0 1-40.96-14.848"></svg:path><svg:path fill="#ffecb3" d="m640 896l64-256h-64a28.252 32.205 0 0 1-20.876-53.906L832 320l-64 256h64a28.252 32.205 0 0 1 20.876 53.906z"></svg:path>`,
})
export class MaterialIconThemeFolderTriggerIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}
