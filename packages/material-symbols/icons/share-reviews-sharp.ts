import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsShareReviewsSharpIcon],svg[material-symbols-share-reviews-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.5 15q.825 0 1.413-.587T16.5 13t-.587-1.412T14.5 11q-.375 0-.712.138t-.613.362L10.5 10.15v-.3l2.675-1.35q.275.225.613.363T14.5 9q.825 0 1.413-.587T16.5 7t-.587-1.412T14.5 5t-1.412.588T12.5 7v.15L9.825 8.5q-.275-.225-.612-.363T8.5 8q-.825 0-1.412.588T6.5 10t.588 1.413T8.5 12q.375 0 .713-.137t.612-.363l2.675 1.35V13q0 .825.588 1.413T14.5 15M2 22V2h20v16H6z"></svg:path>`,
})
export class MaterialSymbolsShareReviewsSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
