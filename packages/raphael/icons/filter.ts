import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[raphaelFilterIcon],svg[raphael-filter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M26.834 6.958c0-2.094-4.852-3.79-10.834-3.79c-5.983 0-10.833 1.696-10.833 3.79c0 .43.213.84.588 1.224l8.662 15.002v4.9c0 .413.71.75 1.583.75c.875 0 1.584-.337 1.584-.75v-4.817L26.3 8.174h-.046c.37-.382.58-.79.58-1.216M16 9.75c-6.363 0-9.833-1.845-9.833-2.792s3.47-2.79 9.833-2.79s9.834 1.843 9.834 2.79S22.364 9.75 16 9.75"></svg:path>`,
})
export class RaphaelFilterIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
