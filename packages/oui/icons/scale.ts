import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ouiScaleIcon],svg[oui-scale-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12.5 12a.5.5 0 1 1 0 1a.5.5 0 0 1 0-1m-2 0a.5.5 0 1 1 0 1a.5.5 0 0 1 0-1m-2 0a.5.5 0 1 1 0 1a.5.5 0 0 1 0-1m4-2a.5.5 0 1 1 0 1a.5.5 0 0 1 0-1m-2 0a.5.5 0 1 1 0 1a.5.5 0 0 1 0-1m2-1a.5.5 0 1 1 0-1a.5.5 0 0 1 0 1m0-3a.5.5 0 1 1 0 1a.5.5 0 0 1 0-1m-2 2a.5.5 0 1 1 0 1a.5.5 0 0 1 0-1m-2 0a.5.5 0 1 1 0 1a.5.5 0 0 1 0-1m0 2a.5.5 0 1 1 0 1a.5.5 0 0 1 0-1m-2 2a.5.5 0 1 1 0 1a.5.5 0 0 1 0-1m-2 0a.5.5 0 1 1 0 1a.5.5 0 0 1 0-1m2-2a.5.5 0 1 1 0 1a.5.5 0 0 1 0-1m6-6a.5.5 0 1 1 0 1a.5.5 0 0 1 0-1m-2 2a.5.5 0 1 1 0 1a.5.5 0 0 1 0-1"></svg:path>`,
})
export class OuiScaleIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
