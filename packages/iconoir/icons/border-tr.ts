import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirBorderTrIcon],svg[iconoir-border-tr-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M20.01 20V4h-16M4 8l.01-.01M4 12l.01-.01M4 16l.01-.01M4 20l.01-.01M16 20l.01-.01M12 20l.01-.01M8 20l.01-.01"></svg:path>`,
})
export class IconoirBorderTrIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
