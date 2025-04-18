import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxSmileIcon],svg[bx-smile-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10s10-4.486 10-10S17.514 2 12 2m0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8s8 3.589 8 8s-3.589 8-8 8"></svg:path><svg:path fill="currentColor" d="M14.829 14.828a4.1 4.1 0 0 1-1.272.858a4 4 0 0 1-4.875-1.45l-1.658 1.119a6.1 6.1 0 0 0 1.621 1.62a6 6 0 0 0 2.148.903a6 6 0 0 0 2.415 0a6 6 0 0 0 2.148-.903c.313-.212.612-.458.886-.731c.272-.271.52-.571.734-.889l-1.658-1.119a4 4 0 0 1-.489.592"></svg:path><svg:circle cx="8.5" cy="10.5" r="1.5" fill="currentColor"></svg:circle><svg:circle cx="15.493" cy="10.493" r="1.493" fill="currentColor"></svg:circle>`,
})
export class BxSmileIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
