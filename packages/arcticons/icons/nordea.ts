import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsNordeaIcon],svg[arcticons-nordea-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8.5 27.908v-7.816l5.178 7.816v-7.816"></svg:path><svg:rect width="3.908" height="5.178" x="15.576" y="22.73" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="1.954" ry="1.954"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M21.24 24.684c0-1.08.875-1.954 1.954-1.954h0m-1.954 0v5.178m18.26-1.954c0 1.08-.875 1.954-1.954 1.954h0a1.954 1.954 0 0 1-1.954-1.954v-1.27c0-1.08.875-1.954 1.954-1.954h0c1.08 0 1.954.875 1.954 1.954m0 3.224v-3.224m-5.942 2.238c-.337.59-.971.986-1.698.986h0a1.954 1.954 0 0 1-1.955-1.954v-1.27c0-1.08.875-1.954 1.955-1.954h0c1.079 0 1.954.875 1.954 1.954v.635h-3.909m-1.71-.635c0-1.08-.875-1.954-1.954-1.954h0a1.954 1.954 0 0 0-1.954 1.954v1.27c0 1.08.875 1.954 1.954 1.954h0c1.08 0 1.954-.875 1.954-1.954m0 1.954v-7.816"></svg:path>`,
})
export class ArcticonsNordeaIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
