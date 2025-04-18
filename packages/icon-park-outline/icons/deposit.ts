import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineDepositIcon],svg[icon-park-outline-deposit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M12 16v28h24V16"></svg:path><svg:path d="m19 20l5 6l5-6M18 32h12m-12-6h12m-6 0v12M14 10h20m2 8h6V4H6v14h6"></svg:path></svg:g>`,
})
export class IconParkOutlineDepositIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
