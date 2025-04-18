import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsInshareIcon],svg[arcticons-inshare-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m25.398 29.816l-6.205-3.062h0a5.17 5.17 0 1 1 1.276-2.328h0l5.803 2.954h0a5.617 5.617 0 1 1-.874 2.436"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m20.51 22.137l5.93-3.253h0a4.025 4.025 0 1 0-1.204-2.273h0l-5.886 3.187"></svg:path>`,
})
export class ArcticonsInshareIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
