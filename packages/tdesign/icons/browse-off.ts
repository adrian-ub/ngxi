import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignBrowseOffIcon],svg[tdesign-browse-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m4 1.586l6.171 6.172l7.072 7.07L23.413 21L22 22.414l-2.965-2.965A12.45 12.45 0 0 1 13 21c-5.58 0-10.302-3.654-11.91-8.696L.991 12l.097-.304A12.5 12.5 0 0 1 5.265 5.68L2.585 3zm2.691 5.52A10.53 10.53 0 0 0 3.097 12c1.441 4.08 5.332 7 9.903 7c1.631 0 3.174-.372 4.55-1.035l-1.793-1.793a5 5 0 0 1-6.929-6.929zm3.601 3.6a3 3 0 0 0 4.001 4.001zM13 5q-.866 0-1.692.135l-.987.16l-.32-1.974l.988-.16A12.6 12.6 0 0 1 13 3c5.579 0 10.301 3.654 11.91 8.696l.097.304l-.097.304a12.5 12.5 0 0 1-1.817 3.572l-.591.807l-1.614-1.181l.59-.807A10.5 10.5 0 0 0 22.904 12C21.46 7.92 17.57 5 13 5m.513 1.926l.956.294a5.01 5.01 0 0 1 3.312 3.311l.293.956l-1.912.587l-.293-.956a3.01 3.01 0 0 0-1.987-1.986l-.956-.294z"></svg:path>`,
})
export class TdesignBrowseOffIcon {
  readonly viewBox = input("0 0 26 24")
  readonly width = input("1.09em")
  readonly height = input("1em")
}
