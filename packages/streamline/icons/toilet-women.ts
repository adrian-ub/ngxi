import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineToiletWomenIcon],svg[streamline-toilet-women-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M7.02 4.652a1.886 1.886 0 1 0 0-3.773a1.886 1.886 0 0 0 0 3.773"></svg:path><svg:path d="m8.743 10.75l-.43 2.14H5.726l-.431-2.14H3.906a.44.44 0 0 1-.428-.412a.3.3 0 0 1 .007-.09c.485-2.278.626-5.596 3.534-5.596s3.05 3.318 3.534 5.596a.3.3 0 0 1 .008.09a.44.44 0 0 1-.429.412z"></svg:path></svg:g>`,
})
export class StreamlineToiletWomenIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
