import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineChristianCross1Icon],svg[streamline-christian-cross-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12 3.5H9v-3H5v3H2v4h3v6h4v-6h3z"></svg:path>`,
})
export class StreamlineChristianCross1Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
