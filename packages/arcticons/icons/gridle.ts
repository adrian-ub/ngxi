import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsGridleIcon],svg[arcticons-gridle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M28.491 40.468h4m-4-8h4m-4 4h2.6m-2.6-4v8M28.49 28v-8h1.3c2.2 0 4 1.8 4 4h0c0 2.2-1.8 4-4 4zm0-12.369v-8h2.6c1.5 0 2.7 1.2 2.7 2.7s-1.2 2.7-2.7 2.7h-2.6m2.792-.008l2.509 2.608M14.987 32.468v8h4m-4-20.468v8m3.9-17.666c0-1.5-1.3-2.8-2.8-2.7c-1.4.1-2.5 1.4-2.5 2.8v2.5c0 1.5 1.2 2.7 2.7 2.7h0c1.5 0 2.7-1.2 2.7-2.7h-2.7M24 5.5v37M5.5 17.804l37 .023m-37 12.418l37-.022"></svg:path><svg:rect width="37" height="37" x="5.5" y="5.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4" ry="4"></svg:rect>`,
})
export class ArcticonsGridleIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
