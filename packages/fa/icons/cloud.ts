import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[faCloudIcon],svg[fa-cloud-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1920 1024q0 159-112.5 271.5T1536 1408H448q-185 0-316.5-131.5T0 960q0-132 71-241.5T258 555q-2-28-2-43q0-212 150-362T768 0q158 0 286.5 88T1242 318q70-62 166-62q106 0 181 75t75 181q0 75-41 138q129 30 213 134.5t84 239.5"></svg:path>`,
})
export class FaCloudIcon {
  readonly viewBox = input("0 0 1920 1408")
  readonly width = input("1.37em")
  readonly height = input("1em")
}
