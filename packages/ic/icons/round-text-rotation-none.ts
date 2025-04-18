import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icRoundTextRotationNoneIcon],svg[ic-round-text-rotation-none-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m20.65 17.65l-1.79-1.79a.501.501 0 0 0-.86.35V17H6c-.55 0-1 .45-1 1s.45 1 1 1h12v.79c0 .45.54.67.85.35l1.79-1.79c.2-.19.2-.51.01-.7M9.5 11.8h5l.66 1.6c.15.36.5.6.89.6c.69 0 1.15-.71.88-1.34l-3.88-8.97C12.87 3.27 12.46 3 12 3s-.87.27-1.05.69l-3.88 8.97c-.27.63.2 1.34.89 1.34c.39 0 .74-.24.89-.6zM12 4.98L13.87 10h-3.74z"></svg:path>`,
})
export class IcRoundTextRotationNoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
