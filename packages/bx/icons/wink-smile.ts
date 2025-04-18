import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxWinkSmileIcon],svg[bx-wink-smile-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10s10-4.486 10-10S17.514 2 12 2m0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8s8 3.589 8 8s-3.589 8-8 8"></svg:path><svg:path fill="currentColor" d="M14.828 14.828a4 4 0 0 1-2.02 1.09a4.1 4.1 0 0 1-1.616 0a4 4 0 0 1-.749-.232a4 4 0 0 1-.679-.368a4.1 4.1 0 0 1-1.082-1.082l-1.658 1.117c.215.319.462.619.733.889a5.99 5.99 0 0 0 8.485.002c.272-.271.52-.571.734-.891l-1.658-1.117q-.215.318-.49.592"></svg:path><svg:circle cx="8.5" cy="10.5" r="1.5" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M15.5 10c-2 0-2.5 2-2.5 2h5s-.501-2-2.5-2"></svg:path>`,
})
export class BxWinkSmileIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
