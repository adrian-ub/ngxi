import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gameIconsUnderhandIcon],svg[game-icons-underhand-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M44.142 366.824c95.92 0 99.81-1.297 99.81-1.297c123.716 201.064 221.662-72.51 234.36-171.483l-36.24-.158l70.897-123.76l68.082 123.38l-35.26 1.454c-81.335 283.797-299.33 296.3-401.65 171.864z"></svg:path>`,
})
export class GameIconsUnderhandIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
