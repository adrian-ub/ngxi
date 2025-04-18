import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsFacebookIcon],svg[ls-facebook-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M38 14h590c20 0 38 18 38 38v590c0 20-18 38-38 38H38c-20 0-38-18-38-38V52c0-20 18-38 38-38m435 374h92l4-88h-96v-65c0-25 5-39 37-39h56l2-82s-25-4-61-4c-88 0-127 55-127 114v76h-65v88h65v244h93z"></svg:path>`,
})
export class LsFacebookIcon {
  readonly viewBox = input("0 0 666 680")
  readonly width = input("0.98em")
  readonly height = input("1em")
}
