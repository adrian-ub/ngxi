import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiLaugh24FilledIcon],svg[fluent-emoji-laugh-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10s10-4.477 10-10S17.523 2 12 2m2.492 7.36a.75.75 0 1 1-1.484-.22c.162-1.09 1.123-1.89 2.242-1.89s2.08.8 2.242 1.89a.75.75 0 1 1-1.484.22c-.048-.323-.35-.61-.758-.61s-.71.287-.758.61M12 18c-3.142 0-5.237-2.363-5.5-5.25h11C17.237 15.637 15.142 18 12 18M8.75 8.75c-.408 0-.71.287-.758.61a.75.75 0 1 1-1.484-.22C6.67 8.05 7.631 7.25 8.75 7.25s2.08.8 2.242 1.89a.75.75 0 1 1-1.484.22c-.048-.323-.35-.61-.758-.61"></svg:path>`,
})
export class FluentEmojiLaugh24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
