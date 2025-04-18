import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[guidanceEmergencyExitIcon],svg[guidance-emergency-exit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M12.5 23.5c-1 0-1.75-1.5-1.75-1.5c-.75-1.5-.75-2.5-.75-4v-.5l-4.5-3.25V14l2.6-3.342A3 3 0 0 1 10.466 9.5H12v2a2 2 0 0 0 2 2h3M3.5 21c0-1 1.5-1.75 1.5-1.75c1.327-.664 2.263-.74 3.5-.749m6 4.999h5V.5h-15V10m7.35-2.5s-1.6-1-1.6-2.25a1.747 1.747 0 1 1 3.496 0c0 1.25-1.596 2.25-1.596 2.25z"></svg:path>`,
})
export class GuidanceEmergencyExitIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
