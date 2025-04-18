import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[typcnCancelIcon],svg[typcn-cancel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 4c-4.411 0-8 3.589-8 8s3.589 8 8 8s8-3.589 8-8s-3.589-8-8-8m-5 8c0-.832.224-1.604.584-2.295l6.711 6.711A4.94 4.94 0 0 1 12 17c-2.757 0-5-2.243-5-5m9.416 2.295L9.705 7.584A4.94 4.94 0 0 1 12 7c2.757 0 5 2.243 5 5c0 .832-.224 1.604-.584 2.295"></svg:path>`,
})
export class TypcnCancelIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
