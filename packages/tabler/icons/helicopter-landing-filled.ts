import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerHelicopterLandingFilledIcon],svg[tabler-helicopter-landing-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 2a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3zm-4 5a1 1 0 0 0-1 1v3h-4V8a1 1 0 0 0-.883-.993L9 7a1 1 0 0 0-1 1v8a1 1 0 0 0 2 0v-3h4v3a1 1 0 0 0 .883.993L15 17a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1"></svg:path>`,
})
export class TablerHelicopterLandingFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
