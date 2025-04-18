import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsToolyIcon],svg[arcticons-tooly-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M39.5 38.9V15.082a2 2 0 0 0-2-2h-27a2 2 0 0 0-2 2V38.9"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M34.042 18.605H13.958a2 2 0 0 0-2 2v11.148a2 2 0 0 0 2 2h20.084a2 2 0 0 0 2-2V20.605a2 2 0 0 0-2-2M27.75 39.11c-1.121 1.163-2.422 1.78-3.75 1.78s-2.629-.617-3.75-1.78"></svg:path><svg:circle cx="18.048" cy="26.136" r="3.048" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="29.952" cy="26.136" r="3.048" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 13.082v-5.92m4.106 8.681h-8.211"></svg:path><svg:circle cx="17.593" cy="15.843" r=".75" fill="currentColor"></svg:circle><svg:circle cx="18.048" cy="26.179" r=".75" fill="currentColor"></svg:circle><svg:circle cx="29.952" cy="26.179" r=".75" fill="currentColor"></svg:circle><svg:circle cx="30.419" cy="15.843" r=".75" fill="currentColor"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24.821 6.342a.821.821 0 1 1-1.642 0a.821.821 0 0 1 1.642 0"></svg:path>`,
})
export class ArcticonsToolyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
