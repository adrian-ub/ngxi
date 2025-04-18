import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[elFileNewAltIcon],svg[el-file-new-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M600 0C268.629 0 0 268.629 0 600s268.629 600 600 600s600-268.629 600-600S931.371 0 600 0M448.975 221.924H814.6v244.409h-61.45V283.008H493.799v110.083H378.076v470.581h293.408v61.084H316.553V349.731zM725.83 519.873h113.013v145.898h145.972v113.086H838.843v145.898H725.83V778.857H579.932V665.771H725.83z"></svg:path>`,
})
export class ElFileNewAltIcon {
  readonly viewBox = input("0 0 1200 1200")
  readonly width = input("1em")
  readonly height = input("1em")
}
