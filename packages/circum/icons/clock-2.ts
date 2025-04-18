import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circumClock2Icon],svg[circum-clock-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 21.933A9.933 9.933 0 1 1 21.933 12A9.944 9.944 0 0 1 12 21.933m0-18.866A8.933 8.933 0 1 0 20.933 12A8.943 8.943 0 0 0 12 3.067"></svg:path><svg:path fill="currentColor" d="M18 12.5h-6a.43.43 0 0 1-.34-.14c-.01 0-.01-.01-.02-.02a.43.43 0 0 1-.14-.34V6a.5.5 0 0 1 1 0v5.5H18a.5.5 0 0 1 0 1"></svg:path>`,
})
export class CircumClock2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
