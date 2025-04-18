import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiTonalityIcon],svg[zmdi-tonality-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M213.5 3q88.5 0 151 62.5T427 216t-62.5 150.5t-151 62.5t-151-62.5T0 216T62.5 65.5T213.5 3M192 385V47q-64 8-106.5 56T43 216t43 113t106 56m43-338v20h61q-29-16-61-20m0 62v22h126q-7-12-15-22zm0 64v22h148q-2-9-5-22zm0 212q32-4 61-20h-61zm111-62q8-10 15-22H235v22zm32-64q3-13 5-22H235v22z"></svg:path>`,
})
export class ZmdiTonalityIcon {
  readonly viewBox = input("0 0 432 432")
  readonly width = input("1em")
  readonly height = input("1em")
}
