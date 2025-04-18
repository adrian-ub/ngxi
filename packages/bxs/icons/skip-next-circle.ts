import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxsSkipNextCircleIcon],svg[bxs-skip-next-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10s10-4.486 10-10S17.514 2 12 2m4 14h-2v-4l-6 4V8l6 4V8h2z"></svg:path>`,
})
export class BxsSkipNextCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
