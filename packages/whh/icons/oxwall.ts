import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhOxwallIcon],svg[whh-oxwall-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 1024q-139 0-257-68.5T68.5 769T0 512t68.5-257T255 68.5T512 0t257 68.5T955.5 255t68.5 257t-68.5 257T769 955.5T512 1024m0-832q-87 0-160.5 43T235 351.5T192 512t43 160.5T351.5 789T512 832q85 0 159-42l145 26l-26-145q42-74 42-159q0-87-43-160.5T672.5 235T512 192"></svg:path>`,
})
export class WhhOxwallIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}
