import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bubblesAssetImageSolidIcon],svg[bubbles-asset-image-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M8.086 6a1.714 1.714 0 1 0 0-3.429a1.714 1.714 0 0 0 0 3.429"></svg:path><svg:path d="M12.372 1.071A1.07 1.07 0 0 0 11.301 0H1.444A1.07 1.07 0 0 0 .372 1.071v9.858A1.07 1.07 0 0 0 1.444 12H11.3a1.07 1.07 0 0 0 1.071-1.071zm-1.5.215a.214.214 0 0 1 .214.214v6.454a.2.2 0 0 1-.068.155a.22.22 0 0 1-.163.06h-.626a7.8 7.8 0 0 0-2.143.257a.2.2 0 0 0-.145.128a.22.22 0 0 0 0 .197q.522.788.857 1.672a.27.27 0 0 1 0 .197a.22.22 0 0 1-.18.094h-.892a.22.22 0 0 1-.197-.128a6.86 6.86 0 0 0-5.674-4.132a.214.214 0 0 1-.197-.214V1.5a.214.214 0 0 1 .214-.214z"></svg:path></svg:g>`,
})
export class BubblesAssetImageSolidIcon {
  readonly viewBox = input("0 0 13 12")
  readonly width = input("1.09em")
  readonly height = input("1em")
}
