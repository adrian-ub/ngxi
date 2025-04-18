import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laCropAltIcon],svg[la-crop-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 4v4H4v2h4v14h14v4h2v-4h4v-2H10V4zm4 4v2h10v10h2V8z"></svg:path>`,
})
export class LaCropAltIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
