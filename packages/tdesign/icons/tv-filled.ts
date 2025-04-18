import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignTvFilledIcon],svg[tdesign-tv-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 2h22v17h-4.754L12 12.76L5.755 19H1z"></svg:path><svg:path fill="currentColor" d="M12 15.587L7.759 19.83l-2.42 2.414h2.834L12 18.416l3.829 3.828h2.833z"></svg:path>`,
})
export class TdesignTvFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
