import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icRoundStreamIcon],svg[ic-round-stream-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="20" cy="12" r="2" fill="currentColor"></svg:circle><svg:circle cx="4" cy="12" r="2" fill="currentColor"></svg:circle><svg:circle cx="12" cy="20" r="2" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="m7.89 14.65l-2.94 2.93a.996.996 0 1 0 1.41 1.41l2.94-2.93a.996.996 0 1 0-1.41-1.41M6.41 4.94A.996.996 0 1 0 5 6.35l2.93 2.94c.39.39 1.02.39 1.42 0c.38-.39.38-1.02-.01-1.41zm9.71 9.71c-.39-.39-1.02-.39-1.42 0a.996.996 0 0 0 0 1.41L17.64 19a.996.996 0 1 0 1.41-1.41zm-.06-5.32l2.99-2.98c.39-.4.39-1.03 0-1.42a.996.996 0 0 0-1.41 0l-2.99 2.98c-.39.39-.39 1.02 0 1.42c.39.39 1.02.39 1.41 0"></svg:path><svg:circle cx="12" cy="4" r="2" fill="currentColor"></svg:circle>`,
})
export class IcRoundStreamIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
