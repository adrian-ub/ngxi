import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonPropertyRelationshipIcon],svg[carbon-property-relationship-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m30 16l-8 8l-1.4-1.4l6.6-6.6l-6.6-6.6L22 8zm-18-1h8v2h-8zM2 16l8-8l1.4 1.4L4.8 16l6.6 6.6L10 24z"></svg:path>`,
})
export class CarbonPropertyRelationshipIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
