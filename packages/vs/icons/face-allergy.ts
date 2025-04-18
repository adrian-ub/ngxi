import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vsFaceAllergyIcon],svg[vs-face-allergy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M832 0Q663 0 508.5 66T243 243T66 508.5T0 832t66 323.5T243 1421t265.5 177t323.5 66t323.5-66t265.5-177t177-265.5t66-323.5t-66-323.5T1421 243T1155.5 66T832 0m128 512l64-64l128 128l128-128l64 64l-128 128l128 128l-64 64l-128-128l-128 128l-64-64l128-128zm-128 640l-160 160l-160-160l-128 128l-64-64l195-192l157 160l160-160l160 160l160-160l192 192l-64 64l-128-128l-160 160zM704 512L576 640l128 128l-64 64l-128-128l-128 128l-64-64l128-128l-128-128l64-64l128 128l128-128z"></svg:path>`,
})
export class VsFaceAllergyIcon {
  readonly viewBox = input("0 0 1664 1664")
  readonly width = input("1em")
  readonly height = input("1em")
}
