import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineSpeaker1Icon],svg[streamline-speaker-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M12.422 3.438a1.498 1.498 0 1 0-1.857-1.859a6.48 6.48 0 0 0-7.13 0a1.499 1.499 0 0 0-2.882.024a1.5 1.5 0 0 0 1.025 1.835A6.5 6.5 0 0 0 .51 7.005a6.4 6.4 0 0 0 .829 3.167A1.488 1.488 0 0 0 2.008 13a1.5 1.5 0 0 0 1.258-.69a6.46 6.46 0 0 0 7.468 0a1.497 1.497 0 0 0 2.756-.809a1.49 1.49 0 0 0-.829-1.329c.545-.966.83-2.058.829-3.167a6.5 6.5 0 0 0-1.068-3.567"></svg:path><svg:path d="M7 10.5a3.5 3.5 0 1 0 0-7a3.5 3.5 0 0 0 0 7"></svg:path><svg:path d="M7 7.5a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1"></svg:path></svg:g>`,
})
export class StreamlineSpeaker1Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
