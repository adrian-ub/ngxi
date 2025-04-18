import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riInfoIIcon],svg[ri-info-i-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 6a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3m-3 4h2v8H9v2h6v-2h-2V8H9z"></svg:path>`,
})
export class RiInfoIIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
