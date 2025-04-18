import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsNesoidIcon],svg[arcticons-nesoid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M40.5 18H30V7.5a2 2 0 0 0-2-2h-8a2 2 0 0 0-2 2V18H7.5a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2H18v10.5a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V30h10.5a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2"></svg:path><svg:circle cx="24" cy="24" r="5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m40.596 24l-4.028-4v1.672h-3.164v4.656h3.164V28zM7.404 24l4.028 4v-1.672h3.163v-4.656h-3.163V20zM24 40.596l4-4.028h-1.672v-3.164h-4.656v3.164H20zm0-33.192l-4 4.028h1.672v3.163h4.656v-3.163H28z"></svg:path>`,
})
export class ArcticonsNesoidIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
