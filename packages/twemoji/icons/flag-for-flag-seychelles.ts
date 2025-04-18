import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[twemojiFlagForFlagSeychellesIcon],svg[twemoji-flag-for-flag-seychelles-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#D62828" d="M32 5h-7.833L1.129 29.785l.001.001c.152.157.317.301.493.431l.001.001L36 13.667V9a4 4 0 0 0-4-4z"></svg:path><svg:path fill="#FCD856" d="M.763 29.35c.112.154.235.299.367.435L24.167 5H12L.763 29.35c-.001-.001-.001-.001 0 0z"></svg:path><svg:path fill="#003F87" d="M12 5H4a4 4 0 0 0-4 4v18c0 .878.283 1.689.762 2.349L12 5z"></svg:path><svg:path fill="#EEE" d="M2.063 30.501l.004.002L36 22.333v-8.667L1.624 30.218c.14.103.287.198.439.283z"></svg:path><svg:path fill="#007A3D" d="M4 31h28a4 4 0 0 0 4-4v-4.667L2.067 30.502A3.981 3.981 0 0 0 4 31z"></svg:path>`,
})
export class TwemojiFlagForFlagSeychellesIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
