import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[qlementineIconsSend16Icon],svg[qlementine-icons-send-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M.345.245a1 1 0 0 1 1.1-.139l14 7a1 1 0 0 1 0 1.788l-14 7a.997.997 0 0 1-1.393-1.209l2-6a1 1 0 0 1 .793-.672l.077-.012l-.077-.012a1 1 0 0 1-.793-.672l-2-6A1 1 0 0 1 .345.247zm7.44 7.51c.282.044.282.45 0 .494l-4.79.753l-2 6l14-7l-14-7l2 6z" clip-rule="evenodd"></svg:path>`,
})
export class QlementineIconsSend16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
