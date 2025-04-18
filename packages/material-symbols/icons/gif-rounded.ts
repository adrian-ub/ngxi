import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsGifRoundedIcon],svg[material-symbols-gif-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.25 15q-.325 0-.537-.213t-.213-.537v-4.5q0-.325.213-.537T12.25 9t.538.213t.212.537v4.5q0 .325-.213.538T12.25 15M6 15q-.45 0-.725-.312T5 14v-4q0-.375.275-.687T6 9h3.25q.325 0 .538.213T10 9.75t-.213.538t-.537.212H6.5v3h2v-.75q0-.325.213-.537T9.25 12t.538.213t.212.537V14q0 .375-.275.688T9 15zm9.25 0q-.325 0-.537-.213t-.213-.537v-4.5q0-.325.213-.537T15.25 9h3q.325 0 .538.213T19 9.75t-.213.538t-.537.212H16v1h1.25q.325 0 .538.213t.212.537t-.213.538t-.537.212H16v1.25q0 .325-.213.538T15.25 15"></svg:path>`,
})
export class MaterialSymbolsGifRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
