import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsLufthansaIcon],svg[arcticons-lufthansa-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M34.513 32.452C20.506 30.482 15.393 21.399 6.5 19.62"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M41.5 20.002a107 107 0 0 0-13.72-.382c-.094 1.904-4.87 5.44-8.025 7.103"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M39.573 21.937a91 91 0 0 0-12.882-.359m11.506 2.212a106 106 0 0 0-13.424-.412m11.053 2.204c-8.068-.699-13.207-.6-13.207-.6m-11.482-3.71l.635-1.048s4.605 1.842 6.575 2.731"></svg:path><svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class ArcticonsLufthansaIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
