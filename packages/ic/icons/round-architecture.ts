import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icRoundArchitectureIcon],svg[ic-round-architecture-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.36 18.78L6.61 21l1.62-1.54l2.77-7.6c-.68-.17-1.28-.51-1.77-.98zm8.41-7.9c-.49.47-1.1.81-1.77.98l2.77 7.6L17.39 21l.26-2.22zm.17-2.28c.3-1.56-.6-2.94-1.94-3.42V4c0-.55-.45-1-1-1s-1 .45-1 1v1.18C9.84 5.6 9 6.7 9 8c0 1.84 1.66 3.3 3.56 2.95c1.18-.22 2.15-1.17 2.38-2.35M12 9c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1"></svg:path>`,
})
export class IcRoundArchitectureIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
