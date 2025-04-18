import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonSaveImageIcon],svg[carbon-save-image-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M21.56 15.1l-3.48-4.35a2 2 0 0 0-1.56-.75H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V16.35a2 2 0 0 0-.44-1.25zM9 12h6v3H9zm6 16H9v-6h6zm2 0v-6a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v6H4V12h3v3a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-2.4l3 3.75V28z" fill="currentColor"></svg:path><svg:path d="M28 20h-3v-2h3V4H14v3h-2V4a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2z" fill="currentColor"></svg:path>`,
})
export class CarbonSaveImageIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
