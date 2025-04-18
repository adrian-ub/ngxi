import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[awsElasticBlockStoreIcon],svg[aws-elastic-block-store-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:rect width="64" height="64" fill="#7AA116"></svg:rect><svg:path fill="#FFF" d="M52,46 L54,46 L54,54 L46,54 L46,52 L50.796,52 L45.247,45.659 L46.753,44.341 L52,50.338 L52,46 Z M19.753,45.659 L14.204,52 L19,52 L19,54 L11,54 L11,46 L13,46 L13,50.338 L18.247,44.341 L19.753,45.659 Z M54,10 L54,18 L52,18 L52,13.662 L46.753,19.659 L45.247,18.341 L50.796,12 L46,12 L46,10 L54,10 Z M14.204,12 L19.753,18.341 L18.247,19.659 L13,13.662 L13,18 L11,18 L11,10 L19,10 L19,12 L14.204,12 Z M32.5,24 C26.493,24 24,22.697 24,22 C24,21.227 26.308,20 32.5,20 C38.363,20 41,21.169 41,22 C41,22.697 38.507,24 32.5,24 L32.5,24 Z M32.586,43 C26.664,43 24,41.831 24,41 L24,24.622 C26.406,25.82 30.387,26 32.5,26 C34.613,26 38.594,25.82 41,24.622 L41,41 C41,41.831 38.39,43 32.586,43 L32.586,43 Z M32.5,18 C27.71,18 22,18.694 22,22 L22,41 C22,44.306 27.757,45 32.586,45 C36.476,45 43,44.48 43,41 L43,22 C43,18.52 36.422,18 32.5,18 L32.5,18 Z"></svg:path></svg:g>`,
})
export class AwsElasticBlockStoreIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
