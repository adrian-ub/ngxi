import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphWeightKilogramsIcon],svg[si-glyph-weight-kilograms-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M9 9h.905v.92H9z"></svg:path><svg:path d="M12.017 4.424c0-.732-.597-1.407-1.335-1.407h-.769A2.493 2.493 0 0 0 7.486 0a2.492 2.492 0 0 0-2.427 3.017h-.744c-.735 0-1.332.675-1.332 1.407l-1.975 9.25A1.33 1.33 0 0 0 2.344 15h10.313a1.33 1.33 0 0 0 1.333-1.326zM6 2.508C6 1.676 6.673 1 7.5 1C8.326 1 9 1.676 9 2.508A1.5 1.5 0 0 1 8.912 3H6.089A1.5 1.5 0 0 1 6 2.508m1.047 6.497H6.045v.948h1.002v1.067H5.982v-1.005h-.939v1.005H3.962V5.911h1.081v3.031h.939V7.937h1.065zm4 4.018h-1v1.023H8.985v-1.008l.064-.063l.892-.017l.012-1.937H7.986l-.008-3.069l3.07.013z"></svg:path></svg:g>`,
})
export class SiGlyphWeightKilogramsIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
