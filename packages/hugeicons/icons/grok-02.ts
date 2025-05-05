import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsGrok02Icon],svg[hugeicons-grok-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" d="M7 9H3l9 13h4zm-.85 8.502L3 22h4l1.138-1.625zm6.75-3.932L21 2h-4l-6.088 8.698zm5.1-3.36V22h3V5.924z" color="currentColor"></svg:path>`,
})
export class HugeiconsGrok02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
