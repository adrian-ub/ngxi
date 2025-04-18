import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[awsSiteToSiteVpnIcon],svg[aws-site-to-site-vpn-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:rect width="64" height="64" fill="#8C4FFF"></svg:rect><svg:path fill="#FFF" d="M21.414,28 C22.517,28 23.414,28.897 23.414,30 C23.414,31.103 22.517,32 21.414,32 C20.311,32 19.414,31.103 19.414,30 C19.414,28.897 20.311,28 21.414,28 L21.414,28 Z M20.414,33.858 L20.414,38 L22.414,38 L22.414,33.858 C24.135,33.411 25.414,31.858 25.414,30 C25.414,27.794 23.62,26 21.414,26 C19.208,26 17.414,27.794 17.414,30 C17.414,31.858 18.693,33.411 20.414,33.858 L20.414,33.858 Z M42.828,14 L38.121,18.707 L36.707,17.293 L39,15 L3.828,15 L6.121,17.293 L4.707,18.707 L0,14 L4.707,9.293 L6.121,10.707 L3.828,13 L39,13 L36.707,10.707 L38.121,9.293 L42.828,14 Z M13.414,11 L11.414,11 L11.414,10 C11.414,4.486 15.9,0 21.414,0 C26.928,0 31.414,4.486 31.414,10 L31.414,11 L29.414,11 L29.414,10 C29.414,5.589 25.825,2 21.414,2 C17.003,2 13.414,5.589 13.414,10 L13.414,11 Z M8.414,42 L34.414,42 L34.414,22 L8.414,22 L8.414,42 Z M31.414,17 L29.414,17 L29.414,20 L13.414,20 L13.414,17 L11.414,17 L11.414,20 L6.414,20 L6.414,44 L36.414,44 L36.414,20 L31.414,20 L31.414,17 Z" transform="translate(10.6 10)"></svg:path></svg:g>`,
})
export class AwsSiteToSiteVpnIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
