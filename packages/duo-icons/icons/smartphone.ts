import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[duoIconsSmartphoneIcon],svg[duo-icons-smartphone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 2a2 2 0 0 1 1.995 1.85L19 4v16a2 2 0 0 1-1.85 1.995L17 22H7a2 2 0 0 1-1.995-1.85L5 20V4a2 2 0 0 1 1.85-1.995L7 2z" class="duoicon-secondary-layer" opacity=".3"></svg:path><svg:path fill="currentColor" d="M12.5 16h-1a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5" class="duoicon-primary-layer"></svg:path>`,
})
export class DuoIconsSmartphoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
