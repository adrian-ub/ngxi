import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[guidanceElevatorIcon],svg[guidance-elevator-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M12 5.5v18M14 6h6.5v17.5h-17V6H10M5 3c.265 0 .66-.275.993-.553a4.9 4.9 0 0 0 1.088-1.276C7.295.804 7.5.358 7.5 0c0 .358.205.804.42 1.171c.285.49.659.918 1.087 1.276c.332.278.728.553.993.553m9-2.5c-.265 0-.66.275-.993.553a4.9 4.9 0 0 0-1.088 1.276c-.214.367-.419.813-.419 1.171c0-.358-.205-.804-.42-1.171a4.9 4.9 0 0 0-1.087-1.276C14.661.775 14.265.5 14 .5"></svg:path>`,
})
export class GuidanceElevatorIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
