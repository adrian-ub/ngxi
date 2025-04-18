import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxHappyHeartEyesIcon],svg[bx-happy-heart-eyes-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 18c4 0 5-4 5-4H7s1 4 5 4"></svg:path><svg:path fill="currentColor" d="M12 22c5.514 0 10-4.486 10-10S17.514 2 12 2S2 6.486 2 12s4.486 10 10 10m0-18c4.411 0 8 3.589 8 8s-3.589 8-8 8s-8-3.589-8-8s3.589-8 8-8"></svg:path><svg:path fill="currentColor" d="m8.535 12.634l2.05-2.083a1.485 1.485 0 0 0-.018-2.118a1.49 1.49 0 0 0-2.065-.034a1.49 1.49 0 0 0-2.067.068c-.586.6-.579 1.53.019 2.117zm7 0l2.05-2.083a1.485 1.485 0 0 0-.018-2.118a1.49 1.49 0 0 0-2.065-.034a1.49 1.49 0 0 0-2.068.067c-.586.6-.579 1.53.019 2.117z"></svg:path>`,
})
export class BxHappyHeartEyesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
