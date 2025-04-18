import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineFistSolidIcon],svg[streamline-fist-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4.88 3.667H2.14V2.37a1.37 1.37 0 0 1 2.74-.003zm3.484 1.171a1.99 1.99 0 0 0-1.816-1.171H5.88V1.37a1.37 1.37 0 0 1 2.74 0v2.671c0 .298-.095.573-.256.797m-1.751.082a.744.744 0 0 1 .15 1.453l-2.107.64a.625.625 0 0 0 .181 1.222c.357 0 .812.178 1.18.514c.362.33.577.754.568 1.195a.625.625 0 1 0 1.25.027c.018-.883-.413-1.633-.975-2.146a3 3 0 0 0-.151-.13l.417-.126a2 2 0 0 0 1.377-1.515a2.4 2.4 0 0 0 .617-.556a2.368 2.368 0 0 0 3.85-.152q.07.346.07.704v1.034c0 2.806-2.339 3.742-2.339 3.742V13.5a.5.5 0 0 1-.5.5H3.795a.5.5 0 0 1-.5-.5v-2.43c-1.4-.486-2.34-2.422-2.339-3.742c0-1.141.257-2.333 1.523-2.333zm4.377-3.854a1.37 1.37 0 0 0-1.37 1.37v1.605a1.37 1.37 0 1 0 2.74 0V2.436a1.37 1.37 0 0 0-1.37-1.37" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineFistSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
