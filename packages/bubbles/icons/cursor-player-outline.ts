import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bubblesCursorPlayerOutlineIcon],svg[bubbles-cursor-player-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.25.76a1.63 1.63 0 0 0-1.528 1.352l-.016.087v13.6l.016.087a1.64 1.64 0 0 0 1.416 1.343c.102.012.293.01.403-.004a1.7 1.7 0 0 0 .505-.153c.065-.033 12.31-6.592 12.406-6.646c.15-.083.262-.168.372-.28a1.64 1.64 0 0 0 .457-.899a2.2 2.2 0 0 0 0-.496a1.6 1.6 0 0 0-.258-.656a1.6 1.6 0 0 0-.571-.523C16.356 7.518 4.112.959 4.046.926A1.7 1.7 0 0 0 3.6.781a3 3 0 0 0-.302-.025zm-.004.989a.7.7 0 0 0-.219.07a.63.63 0 0 0-.28.299a.6.6 0 0 0-.058.217c-.01.097-.01 13.23 0 13.328a.6.6 0 0 0 .057.217a.636.636 0 0 0 .785.338c.053-.018 1.474-.776 6.243-3.33l6.217-3.333a.644.644 0 0 0-.007-1.116C15.898 8.39 3.63 1.82 3.585 1.8a.7.7 0 0 0-.339-.05" clip-rule="evenodd"></svg:path>`,
})
export class BubblesCursorPlayerOutlineIcon {
  readonly viewBox = input("0 0 19 18")
  readonly width = input("1.06em")
  readonly height = input("1em")
}
