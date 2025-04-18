import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[meteoconsCloudUpIcon],svg[meteocons-cloud-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:symbol id="meteoconsCloudUp0" viewBox="0 0 359 231"><svg:path fill="none" stroke="#e2e8f0" stroke-linecap="round" stroke-linejoin="round" stroke-width="15" d="M295.5 223.5a56 56 0 0 0 0-112l-2.5.1a83.9 83.9 0 0 0-153-64.2a56 56 0 0 0-84.6 48.1a56.6 56.6 0 0 0 .8 9a60 60 0 0 0 11.2 119"></svg:path></svg:symbol></svg:defs><svg:use width="359" height="231" href="#meteoconsCloudUp0" transform="translate(76.5 140.5)"></svg:use><svg:path fill="#374151" d="M372.5 247a4.6 4.6 0 0 1-3.2-1.3L350 227.3l-19.3 18.4a4.6 4.6 0 0 1-6.4 0a4.1 4.1 0 0 1 0-6l22.5-21.4a4.6 4.6 0 0 1 6.4 0l22.5 21.4a4.1 4.1 0 0 1 0 6a4.6 4.6 0 0 1-3.2 1.3Z" opacity="0"><svg:animatetransform attributeName="transform" begin="-1.2s" calcMode="spline" dur="3s" keySplines=".55, 0, .1, 1; .55, 0, .1, 1" repeatCount="indefinite" type="translate" values="0 30; 0 0; 0 -30"></svg:animatetransform><svg:animate attributeName="opacity" begin="-1.2s" calcMode="spline" dur="3s" keySplines=".55, 0, .1, 1; .55, 0, .1, 1" repeatCount="indefinite" values="0; 1; 0"></svg:animate></svg:path><svg:path fill="#374151" d="M372.5 274a4.6 4.6 0 0 1-3.2-1.3L350 254.3l-19.3 18.4a4.6 4.6 0 0 1-6.4 0a4.1 4.1 0 0 1 0-6l22.5-21.4a4.6 4.6 0 0 1 6.4 0l22.5 21.4a4.1 4.1 0 0 1 0 6a4.6 4.6 0 0 1-3.2 1.3Z" opacity="0"><svg:animatetransform attributeName="transform" begin="-1.1s" calcMode="spline" dur="3s" keySplines=".55, 0, .1, 1; .55, 0, .1, 1" repeatCount="indefinite" type="translate" values="0 30; 0 0; 0 -30"></svg:animatetransform><svg:animate attributeName="opacity" begin="-1.1s" calcMode="spline" dur="3s" keySplines=".55, 0, .1, 1; .55, 0, .1, 1" repeatCount="indefinite" values="0; 1; 0"></svg:animate></svg:path><svg:path fill="#374151" d="M372.5 301a4.6 4.6 0 0 1-3.2-1.3L350 281.3l-19.3 18.4a4.6 4.6 0 0 1-6.4 0a4.1 4.1 0 0 1 0-6l22.5-21.4a4.6 4.6 0 0 1 6.4 0l22.5 21.4a4.1 4.1 0 0 1 0 6a4.6 4.6 0 0 1-3.2 1.3Z" opacity="0"><svg:animatetransform attributeName="transform" begin="-1s" calcMode="spline" dur="3s" keySplines=".55, 0, .1, 1; .55, 0, .1, 1" repeatCount="indefinite" type="translate" values="0 30; 0 0; 0 -30"></svg:animatetransform><svg:animate attributeName="opacity" begin="-1s" calcMode="spline" dur="3s" keySplines=".55, 0, .1, 1; .55, 0, .1, 1" repeatCount="indefinite" values="0; 1; 0"></svg:animate></svg:path>`,
})
export class MeteoconsCloudUpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
