import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsPenConnectWifiIcon],svg[hugeicons-pen-connect-wifi-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m17.214 7.982l1.402-1.401a1.982 1.982 0 0 1 2.803 2.803l-1.401 1.402m-2.804-2.804L8.98 16.216c-1.045 1.046-1.568 1.568-1.924 2.205s-.527 1.356-.87 2.794L6 22l.785-.187c1.438-.342 2.157-.514 2.794-.87c.637-.355 1.16-.878 2.205-1.923l8.234-8.234m-2.804-2.804l2.804 2.804M7.491 10H7.5M13 4.416C11.592 2.923 9.648 2 7.5 2S3.408 2.923 2 4.416m2.75 2.917A3.77 3.77 0 0 1 7.5 6.125c1.074 0 2.046.462 2.75 1.208" color="currentColor"></svg:path>`,
})
export class HugeiconsPenConnectWifiIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
