import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circumClock1Icon],svg[circum-clock-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 21.933A9.933 9.933 0 1 1 21.933 12A9.944 9.944 0 0 1 12 21.933m0-18.866A8.933 8.933 0 1 0 20.933 12A8.943 8.943 0 0 0 12 3.067"></svg:path><svg:path fill="currentColor" d="M11.5 6a.5.5 0 0 1 1 0v4.8c1.13-1.13 2.26-2.27 3.39-3.4a.5.5 0 0 1 .71.71l-4.26 4.25a.46.46 0 0 1-.58.07c-.01-.02-.02-.02-.03-.02a.43.43 0 0 1-.22-.33Z"></svg:path>`,
})
export class CircumClock1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
