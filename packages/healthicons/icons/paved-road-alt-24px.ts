import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsPavedRoadAlt24pxIcon],svg[healthicons-paved-road-alt-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M6.75 21V3A.25.25 0 0 1 7 2.75h10a.25.25 0 0 1 .25.25v18a.25.25 0 0 1-.25.25H7a.25.25 0 0 1-.25-.25Zm7-16a1.75 1.75 0 1 0-3.5 0v2.5a1.75 1.75 0 0 0 1.1 1.625a1.75 1.75 0 0 0-1.1 1.625v2.5c0 .637.34 1.194.848 1.5a1.75 1.75 0 0 0-.848 1.5v2.5a1.75 1.75 0 1 0 3.5 0v-2.5c0-.637-.34-1.194-.848-1.5c.508-.306.848-.863.848-1.5v-2.5a1.75 1.75 0 0 0-1.1-1.625a1.75 1.75 0 0 0 1.1-1.625z"></svg:path>`,
})
export class HealthiconsPavedRoadAlt24pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
