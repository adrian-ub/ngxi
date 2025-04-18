import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icomoonFreeSleepyIcon],svg[icomoon-free-sleepy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16M8 1.5a6.5 6.5 0 1 1 0 13a6.5 6.5 0 0 1 0-13"></svg:path><svg:path fill="currentColor" d="M10 10.5c0 1.381-.895 2.5-2 2.5s-2-1.119-2-2.5S6.895 8 8 8s2 1.119 2 2.5M6.5 5.313a.5.5 0 0 1-.354-.146c-.302-.302-.991-.302-1.293 0a.5.5 0 0 1-.707-.707c.696-.696 2.011-.696 2.707 0a.5.5 0 0 1-.354.853zm5 0a.5.5 0 0 1-.354-.146c-.302-.302-.991-.302-1.293 0a.5.5 0 0 1-.707-.707c.696-.696 2.011-.696 2.707 0a.5.5 0 0 1-.354.853z"></svg:path>`,
})
export class IcomoonFreeSleepyIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
