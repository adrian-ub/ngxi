import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiRobotMowerIcon],svg[mdi-robot-mower-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 14V5h12c5.5 0 10 4.5 10 10v2h-2.17A2.99 2.99 0 0 1 18 19a2.99 2.99 0 0 1-2.83-2H10a5.002 5.002 0 0 1-9-3m5-3c-1.66 0-3 1.34-3 3s1.34 3 3 3s3-1.34 3-3s-1.34-3-3-3m9-1v2h5.25c-.33-.73-.75-1.4-1.25-2z"></svg:path>`,
})
export class MdiRobotMowerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
