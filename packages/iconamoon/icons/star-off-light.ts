import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconamoonStarOffLightIcon],svg[iconamoon-star-off-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="m12 2l.681-.314a.75.75 0 0 0-1.362 0zm3.104 6.728l-.681.315c.109.236.333.4.592.43zm7.358.873l.509.55a.75.75 0 0 0-.421-1.295zm-3.996 12.298l-.367.655a.75.75 0 0 0 1.102-.801zM12 18.28l.366-.654a.75.75 0 0 0-.732 0zM5.534 21.9l-.735-.147a.75.75 0 0 0 1.102.8zm1.444-7.268l.736.146a.75.75 0 0 0-.226-.697zM1.538 9.6l-.088-.745a.75.75 0 0 0-.42 1.296zm7.297-.11A.75.75 0 1 0 8.658 8zm9.515 7.977a.75.75 0 1 0-1.471.292zM9.948 4.658a.75.75 0 1 0 1.362.628zm8.262 7.853a.75.75 0 1 0 1.018 1.102zM11.319 2.314l3.103 6.729l1.363-.629l-3.104-6.728zm3.696 7.16l7.358.872l.177-1.49l-7.358-.872zm3.817 11.77l-6.466-3.618l-.732 1.308l6.465 3.62zm-7.198-3.618l-6.466 3.619l.733 1.309l6.465-3.62zm-5.364 4.42l1.444-7.268l-1.471-.293l-1.444 7.268zm1.218-7.965l-5.44-5.03l-1.019 1.1l5.44 5.031zm-5.861-3.735l7.208-.855l-.177-1.49l-7.208.855zm15.252 7.414l.851 4.285l1.471-.292l-.851-4.285zM11.31 5.286l1.371-2.972l-1.362-.628l-1.37 2.972zM21.952 9.05l-3.742 3.461l1.018 1.102l3.743-3.461z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="m4 4l16 16"></svg:path></svg:g>`,
})
export class IconamoonStarOffLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
