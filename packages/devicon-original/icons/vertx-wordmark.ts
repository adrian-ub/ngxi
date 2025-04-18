import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[deviconOriginalVertxWordmarkIcon],svg[devicon-original-vertx-wordmark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#002835" d="M15.877 64.84L6.964 42.425H2.245l12.046 29.948h3.154l12.043-29.948h-4.626zm14.52 7.531h18.148v-4.537H34.708V59.44h13.61v-4.306h-13.61v-8.397h13.837v-4.31H30.397zm40.855-20.575c0-4.764-3.267-9.596-9.774-9.596H50.587v30.171h4.31V46.737H61.5c3.65 0 5.444 2.52 5.444 5.082c0 2.609-1.793 5.127-5.444 5.127h-5.015v2.178l10.891 13.249h5.6l-9.46-11.343c5.132-.909 7.736-4.994 7.736-9.233m12.795 20.574v-.224c0-1.366.386-2.654 1.019-3.766V46.735h8.85v-4.537h-22.46v4.537h9.304v25.636zm0 0"></svg:path><svg:path fill="#613a94" d="M95.506 72.147a4.098 4.098 0 0 0-4.086-4.086a4.098 4.098 0 0 0-4.086 4.086a4.097 4.097 0 0 0 4.086 4.08a4.097 4.097 0 0 0 4.086-4.08m27.083-29.722h-5.263l-6.238 8.578l-6.261-8.578H95.66c2.747 3.634 7.625 10.621 10.847 15.042L98.11 69.014c.457.953.705 2.02.705 3.133v.226h5.99L126.4 42.425Zm-4.469 18.49l-4.56 6.33l3.744 5.128h9.119c-2.177-3.11-5.446-7.555-8.303-11.459zm0 0"></svg:path>`,
})
export class DeviconOriginalVertxWordmarkIcon {
  readonly viewBox = input("0 0 128 128")
  readonly width = input("1em")
  readonly height = input("1em")
}
