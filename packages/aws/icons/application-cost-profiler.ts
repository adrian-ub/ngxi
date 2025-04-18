import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[awsApplicationCostProfilerIcon],svg[aws-application-cost-profiler-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:rect width="64" height="64" fill="#7AA116"></svg:rect><svg:path fill="#FFF" d="M42,18 L44,18 L44,7 L42,7 L42,18 Z M35,18 L37,18 L37,0 L35,0 L35,18 Z M28,26 L30,26 L30,10 L28,10 L28,26 Z M21,30 L23,30 L23,5 L21,5 L21,30 Z M2.051,23 L7.051,23 C7.547,30.473 13.527,36.453 21,36.949 L21,41.949 C10.771,41.44 2.561,33.229 2.051,23 L2.051,23 Z M14,3.664 L14,9.317 C9.896,11.907 7.344,16.198 7.033,21 L2.037,21 C2.417,13.422 7.07,6.688 14,3.664 L14,3.664 Z M23,41.949 L23,36.949 C30.805,36.431 37,29.934 37,22 L35,22 C35,29.168 29.168,35 22,35 C14.832,35 9,29.168 9,22 C9,17.932 10.846,14.209 14,11.757 L14,22 L16,22 L16,0.781 L14.667,1.252 C5.895,4.353 0,12.69 0,22 C0,34.131 9.869,44 22,44 C34.131,44 44,34.131 44,22 L42,22 C42,32.69 33.563,41.423 23,41.949 L23,41.949 Z" transform="translate(10 10)"></svg:path></svg:g>`,
})
export class AwsApplicationCostProfilerIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
