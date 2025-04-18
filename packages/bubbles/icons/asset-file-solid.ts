import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bubblesAssetFileSolidIcon],svg[bubbles-asset-file-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.267 3.677L6.837.25A.86.86 0 0 0 6.23 0H1.944A1.714 1.714 0 0 0 .229 1.714v8.572A1.714 1.714 0 0 0 1.944 12H8.8a1.714 1.714 0 0 0 1.714-1.714v-6a.86.86 0 0 0-.248-.609m-8.11 6.609a.214.214 0 0 1-.213-.215V1.93a.214.214 0 0 1 .214-.215h3a.214.214 0 0 1 .214.215v2.357a.857.857 0 0 0 .857.857h2.358a.214.214 0 0 1 .214.214v4.714a.214.214 0 0 1-.214.215z"></svg:path>`,
})
export class BubblesAssetFileSolidIcon {
  readonly viewBox = input("0 0 11 12")
  readonly width = input("0.92em")
  readonly height = input("1em")
}
