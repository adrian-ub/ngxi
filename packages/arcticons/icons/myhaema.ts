import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsMyhaemaIcon],svg[arcticons-myhaema-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4M8.531 18.496v7.008m4.643-7.008v7.008m-4.643-3.517h4.643"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M25.253 22.7c0-.967.784-1.751 1.752-1.751h0c.967 0 1.752.784 1.752 1.752v2.803m-3.504-4.555v4.555m3.504-2.804c0-.967.784-1.751 1.751-1.751h0c.968 0 1.752.784 1.752 1.752v2.803m-8.97-.884c-.302.528-.87.884-1.522.884h0a1.75 1.75 0 0 1-1.752-1.752v-1.139c0-.967.784-1.752 1.752-1.752h0c.968 0 1.752.785 1.752 1.752v.57h-3.504m-1.669.569c0 .968-.784 1.752-1.752 1.752h0a1.75 1.75 0 0 1-1.752-1.752v-1.139c0-.967.785-1.752 1.752-1.752h0c.968 0 1.752.785 1.752 1.752m0 2.891v-4.643m19.185 2.891c0 .968-.785 1.752-1.752 1.752h0a1.75 1.75 0 0 1-1.753-1.752v-1.139c0-.967.785-1.752 1.752-1.752h0c.968 0 1.752.785 1.752 1.752m.001 2.891v-4.643m-12.279 6.861c.526 2.53 3.296 3.317 7.181 3.322c3.237.005 6.432-.4 7.182-3.764"></svg:path><svg:circle cx="39.616" cy="25.136" r=".75" fill="currentColor"></svg:circle>`,
})
export class ArcticonsMyhaemaIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
