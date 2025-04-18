import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uitKeySkeletonAltIcon],svg[uit-key-skeleton-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.853 2.159a.5.5 0 0 0-.707-.013L15.714 7.58l-.024.016l-.014.022l-6.382 6.38A4.46 4.46 0 0 0 6.5 13a4.5 4.5 0 1 0 4.5 4.5a4.46 4.46 0 0 0-.999-2.795l6.05-6.05l1.767 1.768a.5.5 0 0 0 .707-.707l-1.767-1.768l2.122-2.121l1.767 1.768a.5.5 0 0 0 .707 0a.5.5 0 0 0 0-.707L19.587 5.12l2.266-2.267a.5.5 0 0 0 0-.694M6.5 21a3.5 3.5 0 1 1 0-7a3.5 3.5 0 0 1 0 7"></svg:path>`,
})
export class UitKeySkeletonAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
