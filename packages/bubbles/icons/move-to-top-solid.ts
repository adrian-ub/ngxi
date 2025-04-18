import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bubblesMoveToTopSolidIcon],svg[bubbles-move-to-top-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.666 3.333a.51.51 0 0 0 .153-.5a.48.48 0 0 0-.373-.367l-4.373-.973a.51.51 0 0 0-.567.286a.5.5 0 0 0-.04.22l.294 4.454a.507.507 0 0 0 .5.467c.12 0 .235-.043.326-.12l.82-.707a.18.18 0 0 1 .153-.033a.17.17 0 0 1 .114.106a7.56 7.56 0 0 1-1.334 7.434a1.001 1.001 0 0 0 1.527 1.293a9.58 9.58 0 0 0 1.334-10.2a.17.17 0 0 1 .04-.2zm-9.779 8H2.134a.96.96 0 0 0-.96.954v2.753a.96.96 0 0 0 .96.96h2.753a.954.954 0 0 0 .953-.96v-2.753a.953.953 0 0 0-.953-.954m-.38 3.167a.167.167 0 0 1-.167.167H2.667A.167.167 0 0 1 2.5 14.5v-1.667a.167.167 0 0 1 .167-.166h1.667a.166.166 0 0 1 .166.166zM5.84 6.62a.953.953 0 0 0-.953-.953H2.134a.96.96 0 0 0-.96.953v2.753a.96.96 0 0 0 .96.96h2.753a.954.954 0 0 0 .953-.96zM4.507 8.833A.167.167 0 0 1 4.34 9H2.667a.167.167 0 0 1-.167-.167V7.167A.167.167 0 0 1 2.667 7h1.667a.167.167 0 0 1 .166.167zM4.887 0h-2.76a.953.953 0 0 0-.953.953v2.76c0 .527.426.954.953.954h2.76a.953.953 0 0 0 .953-.954V.953A.953.953 0 0 0 4.887 0"></svg:path>`,
})
export class BubblesMoveToTopSolidIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
