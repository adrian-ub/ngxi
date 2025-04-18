import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsRouterKeygenIcon],svg[arcticons-router-keygen-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="12.902" cy="36.332" r="3.029" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.126 42.11v-5.778h0h-22.195m18.404 3.331v-3.331m-3.917-9.599a9.976 9.976 0 0 0-12.746-.035v.035m18.831-6.916a19.615 19.615 0 0 0-24.966 0m30.963-7.26a29 29 0 0 0-37 0"></svg:path><svg:circle cx="24" cy="31.441" r="1.423" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class ArcticonsRouterKeygenIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
