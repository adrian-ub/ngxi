import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignLookAroundIcon],svg[tdesign-look-around-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3a9 9 0 1 0 0 18a9 9 0 0 0 0-18M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12m8-4v4H7V8zm4 0v4h-2V8zm-4 6h2.004v2.004H9z"></svg:path>`,
})
export class TdesignLookAroundIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
