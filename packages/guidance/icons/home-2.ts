import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[guidanceHome2Icon],svg[guidance-home-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M17.5 2.5h-11l-.299.986a14 14 0 0 1-4.366 6.636L.5 11.25v.25m17-9l-.302 1.005a14 14 0 0 1-4.387 6.683L11.55 11.25l-.3.25H.5m17-9l.302 1.005a14 14 0 0 0 4.388 6.683l1.26 1.062l.05.05v10.2H.5v-10m11-.208V21.5m6 0V17"></svg:path>`,
})
export class GuidanceHome2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
