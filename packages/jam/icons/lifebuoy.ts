import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamLifebuoyIcon],svg[jam-lifebuoy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 18a8 8 0 1 0 0-16a8 8 0 0 0 0 16m0 2C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10s-4.477 10-10 10m3.446-12.032a4 4 0 0 0-1.414-1.414l3.625-3.625l1.414 1.414zm-5.478 5.478l-3.625 3.625l-1.414-1.414l3.625-3.625a4 4 0 0 0 1.414 1.414m0-6.892a4 4 0 0 0-1.414 1.414L2.929 4.343L4.343 2.93zm4.736 6.394a4 4 0 1 1 .244-.244q.29-.316.498-.672l2.874 2.874a8 8 0 0 1-1.414 1.414l-2.874-2.874q.356-.21.672-.498M10 12a2 2 0 1 0 0-4a2 2 0 0 0 0 4"></svg:path>`,
})
export class JamLifebuoyIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
