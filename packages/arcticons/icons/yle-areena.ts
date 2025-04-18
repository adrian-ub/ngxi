import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsYleAreenaIcon],svg[arcticons-yle-areena-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m18.721 29.113l-3.929-9.592m7.485 0l-4.679 13.031C17.225 33.457 16.476 34 15.54 34h-.561m9.639-18v12.282m8.112-1.772c-.48.948-1.596 1.58-2.713 1.58h0c-1.756 0-3.192-1.422-3.192-3.159v-2.053c0-1.737 1.436-3.158 3.192-3.158h0c1.755 0 3.191 1.421 3.191 3.158v1.106h-6.383"></svg:path><svg:rect width="37" height="37" x="5.5" y="5.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4" ry="4"></svg:rect>`,
})
export class ArcticonsYleAreenaIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
