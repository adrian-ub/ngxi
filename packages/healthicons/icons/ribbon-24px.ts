import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsRibbon24pxIcon],svg[healthicons-ribbon-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M7.801 4.12c.32-1.215 1.411-2.13 2.912-2.12h2.912c1.462 0 2.518.951 2.83 2.112l.852 1.13l.001.002a4.536 4.536 0 0 1 .001 5.476l-.005.007l-1.654 2.125l-2.791-3.493l2.046-2.631a2.85 2.85 0 0 0-1.33-.345h-2.914c-.486 0-.968.118-1.372.347l3.008 3.867l2.46 3.096L19 19.128L15.796 22l-3.862-4.9v-.002L6.921 10.77l-.005-.006A4.536 4.536 0 0 1 6.92 5.29zm1.4.754c0-.711.516-1.365 1.505-1.358h2.919c1.046 0 1.568.854 1.384 1.607a4.2 4.2 0 0 0-1.434-.256h-2.914c-.48 0-.97.077-1.438.24a1.3 1.3 0 0 1-.023-.233" clip-rule="evenodd"></svg:path><svg:path d="m8.522 14.902l2.824 3.4l-2.902 3.682L5 19.387z"></svg:path></svg:g>`,
})
export class HealthiconsRibbon24pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
