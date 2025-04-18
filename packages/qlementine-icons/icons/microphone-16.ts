import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[qlementineIconsMicrophone16Icon],svg[qlementine-icons-microphone-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m3.75 15.7l7.61-6.79c1.2.046 2.41-.389 3.33-1.3c1.74-1.74 1.74-4.57 0-6.31s-4.57-1.74-6.31 0a4.43 4.43 0 0 0-1.3 3.33L.29 12.24a1.113 1.113 0 0 0 .044 1.53l1.89 1.89c.418.418 1.09.438 1.53.044zm6.83-7.43L7.71 5.4L6.49 6.77l2.72 2.72zm-2.11 1.89L5.83 7.52l-4.8 5.38a.117.117 0 0 0 .005.16l1.89 1.89a.117.117 0 0 0 .16.005l5.38-4.8zm-.395-5.81c.025-.854.363-1.7 1.01-2.35c1.35-1.35 3.55-1.35 4.9 0s1.35 3.55 0 4.9a3.42 3.42 0 0 1-2.35 1.01l-3.57-3.57z" clip-rule="evenodd"></svg:path>`,
})
export class QlementineIconsMicrophone16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
