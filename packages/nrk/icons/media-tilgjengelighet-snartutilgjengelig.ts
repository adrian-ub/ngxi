import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[nrkMediaTilgjengelighetSnartutilgjengeligIcon],svg[nrk-media-tilgjengelighet-snartutilgjengelig-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13.32 12L19 18.63V23H5v-4.38l4.37-4.86l1.32 1.52L7.35 19h9.33L5 5.37V1h14v4.37zm1.65-5L17 4.63V3H7v1.63L9.03 7z" clip-rule="evenodd"></svg:path>`,
})
export class NrkMediaTilgjengelighetSnartutilgjengeligIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
