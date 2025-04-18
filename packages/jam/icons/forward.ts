import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamForwardIcon],svg[jam-forward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.49 17.31a1.966 1.966 0 0 1-2.814.182A2.05 2.05 0 0 1 10 15.966V2.034C10 .911 10.893 0 11.994 0c.573 0 1.118.251 1.496.69l6.012 6.966c.664.768.664 1.92 0 2.688zM11.994 2.034v13.932L18.006 9zM3.49 17.31a1.966 1.966 0 0 1-2.814.182A2.05 2.05 0 0 1 0 15.966V2.034C0 .911.893 0 1.994 0c.573 0 1.118.251 1.496.69l6.012 6.966c.664.768.664 1.92 0 2.688zM1.994 2.034v13.932L8.006 9z"></svg:path>`,
})
export class JamForwardIcon {
  readonly viewBox = input("-2 -3 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
