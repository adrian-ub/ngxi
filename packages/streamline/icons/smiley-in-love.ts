import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineSmileyInLoveIcon],svg[streamline-smiley-in-love-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M13.5 7a6.5 6.5 0 1 1-13 0m5-6.326a6.5 6.5 0 0 1 3 0M3.544 3.085c-.992-1.217-2.04-.352-2.053.58c0 1.388 1.66 2.528 2.053 2.528s2.054-1.14 2.054-2.528c-.014-.932-1.062-1.797-2.054-.58m6.911 0c.992-1.217 2.04-.352 2.053.58c0 1.388-1.66 2.528-2.053 2.528s-2.053-1.14-2.053-2.528c.013-.932 1.06-1.797 2.053-.58"></svg:path><svg:path d="M3.7 8c.5 1.8 2.5 2.9 4.3 2.4c1.1-.4 2-1.3 2.3-2.4"></svg:path></svg:g>`,
})
export class StreamlineSmileyInLoveIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
