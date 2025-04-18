import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixHeartFilledIcon],svg[ix-heart-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M75.307 100.706c48.803-51.694 128.848-48.347 173.652 7.261l7.042 8.739l7.041-8.739c44.805-55.608 124.849-58.954 173.653-7.261c46.203 48.941 46.203 128.289 0 177.23L256.001 469.333H256l-.089-.096L75.307 277.936c-46.204-48.941-46.204-128.289 0-177.23" clip-rule="evenodd"></svg:path>`,
})
export class IxHeartFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
