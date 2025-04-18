import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[foundationPlayCircleIcon],svg[foundation-play-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M50 12.5c-20.712 0-37.5 16.793-37.5 37.502S29.288 87.5 50 87.5s37.5-16.788 37.5-37.498S70.712 12.5 50 12.5m0 65.061c-15.199 0-27.56-12.362-27.56-27.559C22.44 34.807 34.802 22.44 50 22.44s27.56 12.367 27.56 27.562S65.198 77.561 50 77.561"></svg:path><svg:path fill="currentColor" d="m66.352 49.097l.006-.01l-23.367-13.491l-.006.01a1.03 1.03 0 0 0-.521-.157a1.06 1.06 0 0 0-1.059 1.06c0 .043.019.079.024.12h-.024V63.61h.024c.062.526.493.94 1.035.94c.194 0 .365-.066.521-.157l.016.027l23.367-13.49l-.016-.027c.316-.183.538-.511.538-.903s-.222-.719-.538-.903"></svg:path>`,
})
export class FoundationPlayCircleIcon {
  readonly viewBox = input("0 0 100 100")
  readonly width = input("1em")
  readonly height = input("1em")
}
