import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[raphaelLoaction2Icon],svg[raphael-loaction2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.834 29.084V16.166H2.917l26.166-13.25z"></svg:path>`,
})
export class RaphaelLoaction2Icon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
