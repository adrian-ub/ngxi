import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[stashAsteriskDuotoneIcon],svg[stash-asterisk-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 7.25a.75.75 0 0 1 .75.75v2.7l2.339-1.35a.75.75 0 1 1 .75 1.3L13.5 12l2.34 1.35a.75.75 0 0 1-.75 1.3l-2.34-1.351V16a.75.75 0 0 1-1.5 0v-2.701l-2.34 1.35a.75.75 0 0 1-.75-1.298L10.5 12l-2.339-1.35a.75.75 0 1 1 .75-1.3l2.339 1.35V8a.75.75 0 0 1 .75-.75"></svg:path>`,
})
export class StashAsteriskDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
