import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignCity1FilledIcon],svg[tdesign-city-1-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.004 8.004V6h-2v.004H6v2zm0 5V11h-2v.004H6v2zm0 5V16h-2v.004H6v2z"></svg:path><svg:path fill="currentColor" d="M12 2H2v20h15v-6h5v-6H12zm-2 2v16H4V4z"></svg:path><svg:path fill="currentColor" d="M22 18h-3v4h3z"></svg:path>`,
})
export class TdesignCity1FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
