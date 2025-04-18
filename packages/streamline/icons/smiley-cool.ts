import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineSmileyCoolIcon],svg[streamline-smiley-cool-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M7.232 10.617c.349.048.88-.157 1.3-.478c.224-.172.425-.383.57-.596"></svg:path><svg:path d="M13.366 5.678a6.5 6.5 0 1 1-12.731 0M12.768 4A6.5 6.5 0 0 0 7 .5A6.5 6.5 0 0 0 1.232 4"></svg:path><svg:path d="M.5 4.75V4H7v.75a3.25 3.25 0 1 1-6.5 0m6.5 0V4h6.5v.75a3.25 3.25 0 0 1-6.5 0"></svg:path></svg:g>`,
})
export class StreamlineSmileyCoolIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
