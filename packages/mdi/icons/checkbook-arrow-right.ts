import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiCheckbookArrowRightIcon],svg[mdi-checkbook-arrow-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 14h10.53c-.28.31-.53.64-.73 1H5zm16-6v4.08c.72.12 1.39.37 2 .72V5H1v14h13.08a6.5 6.5 0 0 1-.08-1c0-.34.03-.67.08-1H3V8zM5 10h7v2H5zm19 8l-3-3v2h-4v2h4v2z"></svg:path>`,
})
export class MdiCheckbookArrowRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
