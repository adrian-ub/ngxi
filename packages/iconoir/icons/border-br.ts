import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirBorderBrIcon],svg[iconoir-border-br-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M20.01 4v16h-16M4 16l.011.01M4 12l.011.01M4 8l.011.01M4 4l.011.01M16 4l.011.01M12 4l.011.01M8 4l.011.01"></svg:path>`,
})
export class IconoirBorderBrIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
