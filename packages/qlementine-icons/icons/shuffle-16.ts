import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[qlementineIconsShuffle16Icon],svg[qlementine-icons-shuffle-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.1.146a.5.5 0 0 1 .707 0l3 3a.5.5 0 0 1 .146.353a.5.5 0 0 1-.146.353l-3 3a.5.5 0 0 1-.707-.707l2.15-2.15h-2.18c-2.46 0-4.59 1.71-5.12 4.11a6.244 6.244 0 0 1-6.1 4.89H.46a.5.5 0 0 1 0-1h.39c2.46 0 4.59-1.71 5.12-4.11a6.244 6.244 0 0 1 6.1-4.89h2.18L12.1.845a.5.5 0 0 1 0-.707zM.89 3c1.84 0 3.52.8 4.67 2.1a8 8 0 0 0-.512.949a5.25 5.25 0 0 0-4.16-2.05h-.39a.5.5 0 0 1 0-1h.39z"></svg:path><svg:path fill="currentColor" d="M12.1 13c-1.84 0-3.52-.8-4.67-2.1q.287-.453.512-.949a5.25 5.25 0 0 0 4.16 2.05h2.18l-2.15-2.15a.5.5 0 0 1 .707-.707l3 3a.5.5 0 0 1 .146.353a.5.5 0 0 1-.146.353l-3 3a.5.5 0 0 1-.707-.707l2.15-2.15h-2.18z"></svg:path>`,
})
export class QlementineIconsShuffle16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
