import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineFireworksRocketIcon],svg[streamline-fireworks-rocket-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M6.033 7.92L.852 13.102M7 9.006l-.16.16a2 2 0 0 0-.005 2.815l.332.336m1.188-9.809l3.09 3.09L8.45 9.535a.5.5 0 0 1-.751.051L4.367 6.254a.5.5 0 0 1 .05-.752z"></svg:path><svg:path d="M7.936 2.09a.7.7 0 0 1-.17-.263a.54.54 0 0 1-.027-.282a.4.4 0 0 1 .11-.231q.092-.092.232-.111l4.357-.406a.56.56 0 0 1 .263.04a.73.73 0 0 1 .403.403a.56.56 0 0 1 .04.263l-.394 4.37a.4.4 0 0 1-.11.23a.4.4 0 0 1-.232.111a.54.54 0 0 1-.274-.025a.7.7 0 0 1-.259-.16l-3.939-3.94Zm2.088 8.488l.451.45m2.35-.45l-.452.45m-2.349 2.074l.451-.452m2.35.452l-.452-.452"></svg:path></svg:g>`,
})
export class StreamlineFireworksRocketIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
