import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsKidzsearchIcon],svg[arcticons-kidzsearch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="37" height="37" x="5.5" y="5.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4" ry="4"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24.594 30.639c1.04 1.354 2.346 1.859 4.16 1.859h2.513a4.233 4.233 0 0 0 4.233-4.233v-.018a4.233 4.233 0 0 0-4.233-4.233h-2.771a4.237 4.237 0 0 1-4.238-4.238h0a4.247 4.247 0 0 1 4.247-4.246h2.499c1.815 0 3.12.504 4.16 1.859M12.5 15.502v16.995m0-5.92l9.135-11.018m0 16.938L14.637 24"></svg:path>`,
})
export class ArcticonsKidzsearchIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
